import React from 'react';
import styles from './card.css';
import { TextContent } from './TextContent';
import { Preview } from './Preview';
import { Menu } from './Menu';
import { Controls } from './Controls';
import { usePostComments } from '../../../hooks/usePostComments';

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
	const postDate = new Date().getTime() - new Date((data?.created)*1000).getTime();
	let days = Math.floor( (postDate/(1000*60*60*24)) ),
		hours = Math.floor( (postDate/(1000*60*60) % 24) ),
		minutes = Math.floor( (postDate/1000/60) % 60 );

	const timePost = function() {
		let resulTime, result; 
		if (postDate >= days && days != 0) {
			resulTime = days;
		} else if (postDate >= hours && hours != 0) {
			resulTime = hours
		} else if (postDate >= minutes && minutes != 0) {
			resulTime = minutes
		}
		
		if (resulTime == days && days == 1) {
			return `${days} день назад`
		} else if (resulTime == days && days > 1) {
			return `${days} дней назад`
		} else if (resulTime == hours && hours == 1 || hours == 21) {
			return `${hours} час назад` 
		} else if (resulTime == hours && hours > 1 && hours <= 4 || hours >=  22 && hours <= 24) {
			return `${hours} часа назад` 
		} else if (resulTime == hours && hours > 1 && hours >= 5) {
			return `${hours} часов назад` 
		} else if (resulTime == minutes && minutes == 1) {
			return `${minutes} минуту назад` 
		} else if (resulTime == minutes && minutes > 1 && minutes <= 4) {
			return `${minutes} минуты назад` 
		} else if (resulTime == minutes && minutes >= 5) {
			return `${minutes} минут назад` 
		}
		return result;
	}
	
	return (
		<li id={data?.id} className={styles.card}>	
			<TextContent postId={data?.id} title={data?.title} author={data?.author} avatar={data?.sr_detail?.icon_img} created={timePost()}/>
			<Preview preview={data?.thumbnail}/>
			<Menu postId={data?.id}/>
			<Controls points={data?.score}/>
		</li>
	);
}
