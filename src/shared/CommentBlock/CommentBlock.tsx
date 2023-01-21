import React, { ChangeEvent, Component, FormEvent, useContext, useEffect, useState} from 'react';
import styles from './commentBlock.css';
import { EIcons, Icon } from '../Icons';
import { EColor, Text } from '../Text';
import { UserComment } from '../UserComment';
import { useComments } from '../../hooks/useComments';

export interface ICommentBlock {
	id?: string;
	username?: string;
	comment?: string;
	timestamp?: number | string | any;
}

export interface ICommentBlockProps {
	data?: ICommentBlock;

}

export function CommentBlock({ id }: { id: string }) { // 
	//const [comments] = useComments({id});
	// if (!id) {
	// 	console.log('not id');
	// } 

  	return (
		<div className={styles.commentContainer}>
			<div className={styles.commentDivider}>
				
				<div>
					<Icon name={EIcons.arrow} />
				</div>
				<div className={styles.divider}></div>
			</div>
			<div className={styles.commentContent}>
				<div className={styles.commentIcon}>
					<button>
						<Icon name={EIcons.comments} size={14}/>
						<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Ответить</Text>
					</button>
					<div>
						<Icon name={EIcons.share} size={14}/>
						<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Поделиться</Text>
					</div>
					<div>
						<Icon name={EIcons.warning} size={14}/>
						<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}> Пожаловаться</Text>
					</div>
				</div>
				<UserComment />
				{/* {comments.map((comment: { id: string; body: string ; author: string ; created: number; }) => (
					<UserComment
						key={comment.id}
						comment={comment.body}
						username={comment.author}
						timestamp={comment.created}
					/>
				))} */}
			</div>		
		</div>
    );
}