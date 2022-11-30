import React from 'react';
import styles from './textContent.css';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img className={styles.avatar} src="https://avatarfiles.alphacoders.com/335/335001.png" alt="img" />
          <a href="#user-url" className={styles.username}> Дмитрий Гришин</a>
        </div>
        <span className={styles.createAt}>
        <span className={styles.publishedLabel}>Опубликовано </span>
          4 часа назад
        </span> 
      </div>
      <h2 className={styles.title}>
        <a href="@post-url" className={styles.postLink}>
        Следует отметить, что новая модель организационной деятельности...
        </a>
      </h2>
    </div>
  );
}
