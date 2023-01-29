import React, { useState } from 'react';
import styles from './userComment.css';
import { EIcons, Icon } from '../Icons';
import { EColor, Text } from '../Text';
import { timePost } from '../../utils/react/timePost';
import { ReplyForm } from '../ReplyForm';
import { ReplyFormControl } from '../ReplyFormControl';

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
	const [replyForm, setReplyForm] = useState(false);
  	return (
		
		<div id={data?.id} className={styles.commentСontainer}>
			<div>
				<div>
					<Icon name={EIcons.arrow} className={styles.arrow} />
					<Icon name={EIcons.arrow} className={styles.arrowDown} />
				</div>
				<div className={styles.commentDivider}></div>
			</div>
			<div className={styles.commentContent}>
				<div className={styles.metaData}>
					<div className={styles.userLinkComment}>
						<img className={styles.avatarComment} src="https://images.unsplash.com/photo-1663893364107-a6ecd06cf615?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="img" />
						<a href="#user-url" className={styles.usernameComment}> {data?.author}</a>
					</div>
					<span className={styles.createAt}>
						<span className={styles.publishedLabel}> {timePost({data})} </span>
					</span>
					<div className={styles.label}>Лига джентельменов</div>
				</div>
				<p className={styles.textComment}>{data?.body}</p>
				<div className={styles.commentContent}>
					<div className={styles.commentIcon}>
						<button onClick={() => {setReplyForm(!replyForm);
              				}}>
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
					{replyForm && <ReplyForm />}
				</div>
			</div>
		</div>		
    );
}