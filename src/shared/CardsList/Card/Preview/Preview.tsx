import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img className={styles.previewImg} src="https://answit.com/wp-content/uploads/2017/01/full-hd.jpg" alt="img"/>
    </div>
  );
}
