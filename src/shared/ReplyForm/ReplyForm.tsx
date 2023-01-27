import React, { FormEvent, useContext, useRef} from 'react';
import styles from '../CommentForm/commentForm.css';


interface IReplyForm {
	username?: string;
	userlink?: string;
}

export function ReplyForm({username}: IReplyForm) {
	const ref = useRef<HTMLTextAreaElement>(null);

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(ref.current?.value);
	}

  	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea className={styles.input} ref={ref} placeholder={username}/>
			<button type="submit" className={styles.button}>Ответить</button>
		</form>	
    );
}