import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import styles from '../CommentForm/commentForm.css';
import { SubmitHandler, useForm, useFormState } from "react-hook-form";

export interface IComment {
	commentText: string;
}

export function CommentForm() {
	const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<IComment>({mode: 'onChange', defaultValues: {commentText: ''}});
	const onSubmit: SubmitHandler<IComment> = data => {
		alert(`Форма отправлена ${data.commentText}`);
		reset();
		watch;
	};

	const commentText = watch('commentText');
	useEffect(() => {
		const subscription = watch((value) => 
		console.log(value));
		return () => subscription.unsubscribe();
	}, [watch]);

	
  	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<textarea 
				{...register('commentText', {
					minLength: 4,
					required: 'Введите больше 3-х символов',
				})} 
				className={styles.input}/>
				{errors?.commentText && (
					<div style={{color: 'red'}}>{errors.commentText.message}</div>
				)}
			
			<button type="submit" className={styles.button}>Комментировать</button>
		</form>	
    );
}

// type Props = {
// 	value: string,
// 	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
// 	onSubmit: (event: FormEvent) => void;
// }

// export function CommentForm({value, onChange, onSubmit}: Props) {
//   	return (
// 		<form className={styles.form} onSubmit={onSubmit}>
// 			<textarea className={styles.input} value={value} onChange={onChange}/>
// 			<button type="submit" className={styles.button}>Коментировать</button>
// 		</form>	
//     );
// }


// export function CommentForm() {

// 	const [value, setValue] = useState('');
// 	const [touched, setTouched] = useState(false);
// 	const [valueError, setValueError] = useState('');

// 	function handleSubmit(event: FormEvent) {
// 		event?.preventDefault();
// 		setTouched(true);
// 		setValueError(validateValue());

// 		const isFormValid = !validateValue();
// 		if (!isFormValid) return;
// 		alert('Форма отправлена');
// 	}

// 	function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
// 		setValue(event.target.value);
// 	}

// 	function validateValue() { // вычисление на лету без записи в состояние
// 		if (value.length <= 3) return 'Введите больше 3-х символов';
// 		return '';
// 	}

// 	return (
// 		<form className={styles.form} onSubmit={handleSubmit}>
// 			<textarea 
// 			className={styles.input} 
// 			value={value} 
// 			onChange={handleChange} 
// 			aria-invalid={valueError ? 'true' : undefined}/>
// 			{touched && valueError && (<div>{validateValue()}</div>)}
// 			<button type="submit" className={styles.button}>Коментировать</button>
// 		</form>	
//   	);
// }