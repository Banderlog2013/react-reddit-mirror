import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
import styles from '../CommentForm/commentForm.css';
import { commentContext } from '../Context/commentContext';


export function CommentForm() {
	const { value, onChange } = useContext(commentContext)

	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
		onChange(event.target.value);
	}

	function handleSubmit(event: FormEvent) {
		event.preventDefault();
		console.log(value);
	}

  	return (
		<form className={styles.form} onSubmit={handleSubmit}>
			<textarea className={styles.input} value={value} onChange={handleChange}/>
			<button type="submit" className={styles.button}>Коментировать</button>
		</form>
    );
}