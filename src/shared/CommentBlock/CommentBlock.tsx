import React, { useEffect, useState } from 'react';
import { IUserComment, UserComment } from '../UserComment';
import { usePostComments } from '../../hooks/usePostComments';

export interface ICommentBlockProps {
	postId: string;
}

export function CommentBlock({postId}: ICommentBlockProps) { // 
	const [comments] = usePostComments(postId);
	//console.log(comments)
  	return (
		<>
			{comments.map((comment: { data: IUserComment; }) => (
				<UserComment
					data={comment.data} key={comment.data.id}
				/>
			))}
		</>
    );
}