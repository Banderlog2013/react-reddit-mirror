import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../Context/userContext';
import styles from './searchBlock.css';
import { UserBlock } from './UserBlock';

export function SearchBlock() {    
	const {iconImg, name} = useContext(userContext)
	return (
		<div className={styles.searchBlock}>
			<UserBlock avatarSrc={iconImg} username={name}/>
		</div>
	);
}
