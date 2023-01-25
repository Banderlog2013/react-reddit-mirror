import React from 'react';
import styles from './userComment.css';
import { EIcons, Icon } from '../Icons';
import { EColor, Text } from '../Text';
import { timePost } from '../../utils/react/timePost';

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
						<div className={styles.commentDivider}>
							<div>
								<Icon name={EIcons.arrow} />
								{/* <div className={styles.divider}></div> */}
							</div>
						</div>
						<div className={styles.userLinkComment}>
							<img className={styles.avatarComment} src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img" />
							<a href="#user-url" className={styles.usernameComment}> {data?.author}</a>
						</div>
						<span className={styles.createAt}>
							<span className={styles.publishedLabel}> {timePost({data})} </span>
						</span>
						<div className={styles.label}>Лига джентельменов</div>
					</div>
				</div>		
			</div>

			{/* <div id={data?.id} className="comment-container">
				<div className="meta-data-container">
					<img className="avatar" src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img" />
					<div className="meta-data">
						<div className="user-name">{data?.author}</div>
						<div className="create-at">{data?.created}</div>
						<div className="label">Лига джентельменов</div>
					</div>
					<div className="arrow-divider-container">
						<Icon name={EIcons.arrow} />
						<div className="divider"></div>
					</div>
				</div>
				<div className="comment-body">{data?.body}</div>
				<div className="comment-actions">
					<button className="comment-action">
						<Icon name={EIcons.comments} size={14}/>
						<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Ответить</Text>
					</button>
					<button className="comment-action">
						<Icon name={EIcons.share} size={14}/>
						<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Поделиться</Text>
					</button>
					<button className="comment-action">
						<Icon name={EIcons.warning} size={14}/>
						<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Пожаловаться</Text>
					</button>
				</div>
			</div> */}
		</>		
    );
}