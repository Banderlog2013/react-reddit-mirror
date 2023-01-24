import React from 'react';
import styles from './userComment.css';
import { EIcons, Icon } from '../Icons';
import { EColor, Text } from '../Text';

export interface IUserComment {
	id: string;
	author?: string;
	created?: number | string | any;
	body?: string;
}

export interface IUserCommentProps {
	data?: IUserComment;
}

export function UserComment({data}: IUserCommentProps) {
  	return (
		<>
			<div id={data?.id} className={styles.commentContainer}>
				<div className={styles.commentDivider}>
					<div>
						<Icon name={EIcons.arrow} />
						<div className={styles.divider}></div>
					</div>
				</div>
				<div className={styles.commentContent}>
					<div className={styles.commentIcon}>
						<button>
							<Icon name={EIcons.comments} size={14}/>
							<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Ответить</Text>
						</button>
						<button>
							<Icon name={EIcons.share} size={14}/>
							<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Поделиться</Text>
						</button>
						<button>
							<Icon name={EIcons.warning} size={14}/>
							<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Пожаловаться</Text>
						</button>
					</div>
					<p>{data?.body}</p>
					<div className={styles.metaData}>
						<div className={styles.userLinkComment}>
							<img className={styles.avatarComment} src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img" />
							<a href="#user-url" className={styles.usernameComment}> {data?.author}</a>
						</div>
						<span className={styles.createAt}>
							<span className={styles.publishedLabel}> {data?.created} </span>
							1 час назад
						</span>
						<div className={styles.label}>Лига джентельменов</div>
					</div>
				</div>		
			</div>
		</>		
    );
}