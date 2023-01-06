import React from 'react';
import { Break } from '../../../Break';
import { CommentsIcon } from '../../../Icons';
import { EColor, Text } from '../../../Text';
import styles from './comment.css'

export function Comment() {
	
	return (
		<div className={styles.comment}>
			<CommentsIcon width={14} height={14}/>
			<div className={styles.textComment}>
				<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}>Коментарии</Text>
			</div>
		</div>
	);
}