import React, { useEffect, useRef, useState } from 'react';
import styles from './cardsList.css';
import { Card, IPostData } from './Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';

export function CardsList() {
	const token = useSelector<RootState>(state => state.token)
	const [posts, setPosts] = useState<{ data: IPostData }[]>([]);
	const [loading, setLoading] = useState(false);
	const [errorLoading, setErrorLoading] = useState('');
	const bottonOfList = useRef<HTMLDivElement>(null);
	const [nextAfter, setNextAfter] = useState('');
	const [noMorePosts, setNoMorePosts] = useState(false);

	useEffect(() => {

		async function load() {
			setLoading(true);
			setErrorLoading('');

			try {
				const { data: { data: { after, children }} } = await axios.get('https://oauth.reddit.com/rising/', {
				headers: { 'Authorization': `bearer ${token}` },
				params: {
					limit: 10,
					after: nextAfter,
				}
				
			});
				// проверяем, есть ли новые посты
				if (nextAfter === after) {
					setNoMorePosts(true);
				} else {
					setNextAfter(after);
					setPosts(prevChildren => prevChildren.concat(...children));
				}
			} catch (error) {
				setErrorLoading(String(error));
			}
			setLoading(false);
		}

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting) {
				load();
			}
		}, {
			rootMargin: '10px',
		});

		if (bottonOfList.current && !noMorePosts) {
			observer.observe(bottonOfList.current);
		} else if (bottonOfList.current && noMorePosts) {
			observer.unobserve(bottonOfList.current);
		}

		return () => {
			if (bottonOfList.current) {
				observer.unobserve(bottonOfList.current);
			}
		}

	}, [bottonOfList.current, nextAfter, token])
  
	return (
		<ul className={styles.cardsList}>
			{posts.length === 0 && !loading && !errorLoading && (
				<div role='alert' style={{textAlign: 'center'}}>Нет ни одного поста</div>
			)}

			{posts.map(post => (
				<Card key={post.data?.id} data={post.data}/>
			))}

			<div ref={bottonOfList}></div>

			{loading && (
				<div role='alert' style={{textAlign: 'center'}}>Загрузка...</div>
			)}

			{errorLoading && (
				<div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div>
			)}
		</ul>
	);
}
