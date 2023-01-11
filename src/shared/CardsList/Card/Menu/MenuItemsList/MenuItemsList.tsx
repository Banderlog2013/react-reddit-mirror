import React from 'react';
import styles from './menuItemsList.css';
import { EColor, Text } from '../../../../Text';
import { EIcons, Icon } from '../../../../Icons';

interface IMenuItemsProps {
  postId?: string;
}

export function MenuItemsList({postId}: IMenuItemsProps) {
	return ( 
		<ul id={postId} className={styles.menuItemsList}>

			<li className={styles.menuItem} onClick={() => console.log(postId)}>
				<Icon  name={EIcons.comments} size={14}/>
				<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}>Коментарии</Text>
			</li>

			<div className={styles.divider} />

			<li className={styles.menuItem} onClick={() => console.log(postId)}>
				<Icon  name={EIcons.share} size={14}/>
				<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}>Поделиться</Text>
			</li>

			<div className={styles.divider} />

			<li className={styles.menuItem} onClick={() => console.log(postId)}>
				<Icon name={EIcons.hide} size={14}/>
				<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}>Скрыть</Text>
			</li>

			<div className={styles.divider} />

			<li className={styles.menuItem} onClick={() => console.log(postId)}>
				<Icon name={EIcons.save} size={14}/>
				<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}>Сохранить</Text>
			</li>

			<div className={styles.divider} />
		
			<li className={styles.menuItem}>
				<Icon name={EIcons.warning} size={14}/>
				<Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}>Пожаловаться</Text>
			</li>
		</ul>
	);
}
