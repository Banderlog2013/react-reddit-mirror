import React from 'react';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';
import { CommentsButton } from './CommentsButton';
import { ShareButton } from './ShareButton';
import { SaveButton } from './SaveButton';

interface IControlProps {
	points?: number
}

export function Controls({points}: IControlProps) {
	return (
		<div className={styles.controls}>
			<KarmaCounter points={points}/>
			<CommentsButton />
			<div className={styles.actions}>
				<ShareButton />
				<SaveButton />
			</div>
		</div>
	);
}
