import React, { ChangeEvent, FormEvent, useState} from 'react';
import styles from '../CommentForm/commentForm.css';
import { useUserData} from '../../hooks/useUserData'

export function ReplyFormControl() {
	const [ value, setValue ] = useState('');
	const [userData] = useUserData();
	

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		setValue(event.target.value);
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(value);
	}

  	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea className={styles.input} value={value} onChange={handleChange} placeholder={`${userData.name}, оставьте свой комментарий`}/>
			<button type="submit" className={styles.button}>Коментировать</button>
		</form>	
    );
}