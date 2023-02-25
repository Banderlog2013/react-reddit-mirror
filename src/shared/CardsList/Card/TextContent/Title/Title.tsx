import React, { useState } from 'react';
import styles from './title.css';
import { Link, useParams } from 'react-router-dom';

export interface ITitleProps {
    title?: string;
    postId: string;
}

export function Title({title, postId}: ITitleProps) {
    
    //console.log(postId)
	//const [isModalOpened, setIsModalOpened] = useState(false);
	return (
        <h2 className={styles.title} onClick={() => {console.log('click me');}}>
            <Link to={`/posts/${postId}`} className={styles.postLink}>
                {title}
            </Link>

            {/* <a href="#post-url" className={styles.postLink} onClick={() => {setIsModalOpened(true); }}>{title}
            </a>
            {isModalOpened && (
                <Post postId={postId} onClose={() => { setIsModalOpened(false); }} />
            )} */}
        </h2>
	);
}

