import React from 'react';
import styles from './menu.css';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList/GenericList';
import { Text } from './Text';
import { Icons } from './Icon';
import { comments, share, hide, save, complain } from './Icon';
import { textComments, textShare, textHide, textSave, textComplain } from './Text';


const MENULIST = [
  {As: 'li' as const, icon: <Icons iconName={comments}/>, textContent: <Text textName={textComments}/>},
  {As: 'li' as const, icon: <Icons iconName={share}/>, textContent: <Text textName={textShare}/>},
  {As: 'li' as const, icon: <Icons iconName={hide}/>, textContent: <Text textName={textHide}/>},
  {As: 'li' as const, icon: <Icons iconName={save}/>, textContent: <Text textName={textSave}/>},
  {As: 'li' as const, icon: <Icons iconName={complain}/>, textContent: <Text textName={textComplain}/>}
].map(generateId)

export function Menu() {
  const [list, setList] = React.useState(MENULIST);
  return (
    <div className={styles.menu}>
      <Dropdown button={<button className={styles.menuButton}>
          <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9"/>
            <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9"/>
          </svg>
        </button>}>
        <ul className={styles.dropdown}>
          <div className={styles.menuItemsList}>
            <GenericList list={list}/>
          </div>
        </ul> 
      </Dropdown>
    </div>
  );
}


