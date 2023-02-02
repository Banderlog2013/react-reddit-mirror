import React, { useContext, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { CommentBlock } from "../CommentBlock";
import { CommentFormContainer } from "../CommentFormContainer";
import styles from './post.css'

interface IPost {
    onClose?: () => void;
    postId: string;
} 

export function Post(props: IPost) {
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (event.target instanceof Node && !ref.current?.contains(event.target)) {
                props.onClose?.();
            }
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick)
        }
    }, []);

    const node = document.querySelector('#modal_root');
    if (!node) return null;

    return ReactDOM.createPortal((
        <div className={styles.modal} ref={ref}>
            <h2>Следует отметить, что новая модель организационной деятельности поможет</h2>
            <div className={styles.content}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum voluptatibus! Corrupti, eos! Voluptatem deleniti, voluptatum necessitatibus provident aut dolores minima laborum quidem, velit dignissimos, quaerat quae perferendis architecto magni.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum voluptatibus! Corrupti, eos! Voluptatem deleniti, voluptatum necessitatibus provident aut dolores minima laborum quidem, velit dignissimos, quaerat quae perferendis architecto magni.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, ipsum voluptatibus! Corrupti, eos! Voluptatem deleniti, voluptatum necessitatibus provident aut dolores minima laborum quidem, velit dignissimos, quaerat quae perferendis architecto magni.</p>
            </div>
            <CommentFormContainer />
            <CommentBlock postId={props.postId}  />
        </div>
    ), node);
}