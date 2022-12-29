import React, { useState } from 'react';
import { Title } from './Title';
import styles from './textContent.css';

export interface ITextProps {
	author?: string;
	title?: string;
	avatar?: string;
	created?: number | string | any;
}


export function TextContent({title, author, avatar, created}: ITextProps) {
	
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
			<Title title={title}/>
		</div>
	);
}

