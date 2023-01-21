import React, { useState } from 'react';
import styles from './title.css';
import { Post } from '../../../../Post';


interface ITitleProps {
    title?: string;
}

export function Title({title}: ITitleProps) {
	const [isModalOpened, setIsModalOpened] = useState(false);
	return (
        <h2 className={styles.title} onClick={() => {console.log('clicked');}}>
            <a href="#post-url" className={styles.postLink} onClick={() => {setIsModalOpened(true); }}>{title}
            </a>
            {isModalOpened && (
                <Post onClose={() => {setIsModalOpened(false)}}/>
            )}
        </h2>
	);
}

