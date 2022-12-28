import React from 'react';
import styles from './textContent.css';

export interface ITextProps {
	author?: string;
	title?: string;
	avatar?: string;
	permalink?: string;
	created?: number | string | any;
}


export function TextContent({title, author, avatar, created, permalink}: ITextProps) {
	
	return (
		<div className={styles.textContent}>
			<div className={styles.metaData}>
				<div className={styles.userLink}>
				<img className={styles.avatar} src={avatar} alt="img" />
				<a href="#user-url" className={styles.username}> {author}</a>
				</div>
				<span className={styles.createAt}>
				<span className={styles.publishedLabel}>Опубликовано </span>
				{created}
				</span> 
			</div>
			<h2 className={styles.title}>
				<a href={'https://www.reddit.com/'+permalink} className={styles.postLink}>{title}
				</a>
			</h2>
		</div>
	);
}

