import React, { useEffect, useRef, useState } from 'react';
import styles from './cardsList.css';
import { Card, IPostData } from './Card';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/reducer';
import { Page404 } from '../Page404';

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
				if (nextAfter === after || posts.length == 10) {
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
			if (entries[0].isIntersecting && !noMorePosts) {
				load();
			}
		}, {
			rootMargin: '10px',
		});

		if (bottonOfList.current) {
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

	async function handleLoadMore() {
		setLoading(true);
		setErrorLoading('');

		try {
			const { data: { data: { after, children }} } = await axios.get('https://oauth.reddit.com/rising/', {
			headers: { 'Authorization': `bearer ${token}` },
			params: {
				limit: 20,
				after: nextAfter,
			}
		});
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
		console.log(posts.length);

		const observer = new IntersectionObserver((entries) => {
			if (entries[0].isIntersecting && !noMorePosts) {
				handleLoadMore();
			}
		}, {
			rootMargin: '10px',
		});

		if (bottonOfList.current) {
			observer.observe(bottonOfList.current);
		} else if (bottonOfList.current && noMorePosts) {
			observer.unobserve(bottonOfList.current);
		}

		return () => {
			if (bottonOfList.current) {
				observer.unobserve(bottonOfList.current);
			}
		}

	};
	
	return (
			<ul className={styles.cardsList}>
			{posts.length === 0 && !loading && !errorLoading && (
				<div role='alert' style={{textAlign: 'center'}}>Нет ни одного поста</div>
			)}

			{posts.map(post => (
				<Card key={post.data?.id} data={post.data}/>
			))}

			<div ref={bottonOfList}></div>

			{loading && !Page404 &&(
				<div role='alert' style={{textAlign: 'center'}}>Загрузка...</div>
			)}

			{errorLoading && !Page404 && !loading && (
				<div role='alert' style={{textAlign: 'center'}}>{errorLoading}</div>
			)}

			{posts.length % 20 === 0 && posts.length !== 0 && !loading && !errorLoading &&(
				<button onClick={handleLoadMore} className={styles.buttonDownload}>Загрузить еще</button>
			)}
		</ul>
	);
}

