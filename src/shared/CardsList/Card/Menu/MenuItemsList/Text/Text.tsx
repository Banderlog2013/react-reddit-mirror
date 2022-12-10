import React from 'react';
import styles from './text.css';

export const textComments = 'Коментарии',
             textShare = 'Поделиться',
             textHide = 'Скрыть',
             textSave = 'Сохранить',
             textComplain = 'Пожаловаться';

interface MenuText {
  text: React.ReactNode
}

export function Text({text}: MenuText) {

  return (
    <span className={styles.s14}>
      {text}
    </span>
  );
}
