import React, { FormEvent, useRef} from 'react';
import { useUserData} from '../../hooks/useUserData'
import styles from '../CommentForm/commentForm.css';

// interface IReplyForm {
// 	username?: string;
// 	userlink?: string;
// }

export function ReplyForm() {
	const ref = useRef<HTMLTextAreaElement>(null);
	const [userData] = useUserData();

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(ref.current?.value);
	}

  	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea className={styles.input} ref={ref} placeholder={`${userData.name}, оставьте свой комментарий`}/>
			<button type="submit" className={styles.button}>Ответить</button>
		</form>	
    );
}