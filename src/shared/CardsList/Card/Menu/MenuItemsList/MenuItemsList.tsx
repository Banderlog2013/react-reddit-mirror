import React from 'react';
import styles from './menuitemslist.css';
import { Icons } from './Icon';
import { Text } from './Text';
import { Divider } from './Divider';
import { iconComments, iconShare, iconHide, iconSave, iconComplain } from '../MenuItemsList/Icon';
import { textComments, textShare, textHide, textSave, textComplain } from '../MenuItemsList/Text';

export function MenuItemsList() {
  return (
    <div className={styles.menuItemsList}>
      <div className={styles.menuItem}>
        <Icons icon={iconComments}/>
        <Text text={textComments}/>
      </div>
      <Divider/>
      <div className={styles.menuItem}>
        <Icons icon={iconShare}/>
        <Text text={textShare}/>
      </div>
      <Divider/>
      <div className={styles.menuItem}>
        <Icons icon={iconHide}/>
        <Text text={textHide}/>
      </div>
      <Divider/>
      <div className={styles.menuItem}>
        <Icons icon={iconSave}/>
        <Text text={textSave}/>
      </div>
      <Divider/>
      <div className={styles.menuItem}>
        <Icons icon={iconComplain}/>
        <Text text={textComplain}/>
      </div>
    </div>
  );
}
