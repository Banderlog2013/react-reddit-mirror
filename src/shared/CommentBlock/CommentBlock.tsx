import React, { useEffect, useState } from 'react';
import styles from './commentBlock.css';
import { EIcons, Icon } from '../Icons';
import { EColor, Text } from '../Text';
import { UserComment } from '../UserComment';
import { usePostComments } from '../../hooks/usePostComments';


// export interface ICommentBlock {
// 	id?: string;
// 	username?: string;
// 	comment?: string;
// 	timestamp?: number | string | any;
// }

export interface ICommentBlockProps {
	postId: string;
	// username?: string;
	//comment?: string;
	// timestamp?: number;
}

export function CommentBlock({postId}: ICommentBlockProps) { // 
	const [comments] = usePostComments(postId);
	console.log(comments); // коментарии приходят
  	return (
		<>
			{comments.length > 0 && comments.map((comment: { id: string; body: string ; author: string ; created: number; }) => (
				<UserComment
					key={comment.id}
					// comment={comment.body}
					// username={comment.author}
					// timestamp={comment.created}

				/>
			))}
		</>
    );
}