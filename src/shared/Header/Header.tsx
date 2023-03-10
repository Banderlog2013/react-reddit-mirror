import React from 'react';
import styles from './header.css';
import { SearchBlock } from './SearchBlock';
import { ThreadTitle } from './Threadtitle';
import { SortBlock } from './SortBlock';

export function Header() {
		return (
		<header className={styles.header}>
			<SearchBlock/>
			<ThreadTitle />
			<SortBlock />
		</header>
	);
}
