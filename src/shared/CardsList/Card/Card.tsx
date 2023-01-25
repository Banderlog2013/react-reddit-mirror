import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { usePostComments } from '../../../hooks/usePostComments';
import { timePost } from '../../../utils/react/timePost';

export interface IPostData {
	id: string;
	author?: string;
	title?: string;
	thumbnail?: string;
	score?: number;
	num_comments?: number | string | any;
	created?: number | string | any;
	sr_detail?: {
		icon_img: string;
	};
} 

export interface ICardProps {
	data: IPostData;
	kind?: string;
}

export function Card({data}: ICardProps) {
	const postId = data.id;
	const [comments] = usePostComments(postId);
	
	return (
		<li id={data?.id} className={styles.card}>	
			<TextContent postId={data?.id} title={data?.title} author={data?.author} avatar={data?.sr_detail?.icon_img} created={timePost({data})}/>
			<Preview preview={data?.thumbnail}/>
			<Menu postId={data?.id}/>
			<Controls points={data?.score}/>
		</li>
	);
}


