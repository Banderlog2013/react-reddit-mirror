import React from 'react';
import styles from './userComment.css';


export interface ICommentProps {
    id?: string;
	comment?: string;
    username?: string;
    timestamp?: number | string | any;
}

export function UserComment({id, comment, username, timestamp}: ICommentProps) {
	//console.log({username});
  	return (
		
		<>
			<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi ut aspernatur accusamus amet explicabo aperiam at rem? Dolorum, inventore nulla explicabo nobis hic odio ea, sequi eaque totam officia iusto.</p>
			<div className={styles.metaData}>
				<div className={styles.userLinkComment}>
					<img className={styles.avatarComment} src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img" />
					<a href="#user-url" className={styles.usernameComment}> Вася Пупкин</a>
				</div>
				<span className={styles.createAt}>
					<span className={styles.publishedLabel}> Опубликовано </span>
					1 час назад
				</span>
				<div className={styles.label}>Лига джентельменов</div>
			</div>
		</>		

    );
}