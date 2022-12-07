import React from 'react';
import styles from './text.css';

export const textComments = 'Коментарии',
             textShare = 'Сохранить',
             textHide = 'Скрыть',
             textSave = 'Сохранить',
             textComplain = 'Пожаловаться';

interface MenuText {
  textName: React.ReactNode
}

export function Text({textName}: MenuText) {

  return (
    <span className={styles.s14}>
      {textName}
    </span>
  );
}
