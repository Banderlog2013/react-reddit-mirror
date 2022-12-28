import React, { useContext } from 'react';
import styles from './cardsList.css';
import { Card, IPostData } from './Card';
import { postsContext } from '../Context/postsContext';

export function CardsList() {
	const posts = React.useContext(postsContext)
  
	return (
		<ul className={styles.cardsList}>
			{posts.map((posts: { data: IPostData; }) => (
				<Card key={posts.data?.id} data={posts.data}/>
			))}
		</ul>
	);
}
