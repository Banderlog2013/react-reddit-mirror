import React from 'react';
import styles from './menu.css';
import { generateId } from '../../../../utils/react/generateRandomIndex';
import { Dropdown } from '../../../Dropdown';
import { GenericList } from '../../../GenericList/GenericList';
import { MenuItemsList } from './MenuItemsList';
import { CloseButton } from './MenuItemsList/CloseButton';
import { MenuIcon } from '../../../Icons/MenuIcon';
import { EColor, Text } from '../../../Text';


// const MENULIST = [
//   {As: 'li' as const, menuitemslist: <MenuItemsList />}
//   // {As: 'li' as const, className: styles.menuItem, icon: <Icons iconName={share}/>, textContent: <Text textName={textShare}/>, divider: <Divider />},
//   // {As: 'li' as const, className: styles.menuItem, icon: <Icons iconName={hide}/>, textContent: <Text textName={textHide}/>, divider: <Divider />},
//   // {As: 'li' as const, className: styles.menuItem, icon: <Icons iconName={save}/>, textContent: <Text textName={textSave}/>, divider: <Divider />},
//   // {As: 'li' as const, className: styles.menuItem, icon: <Icons iconName={complain}/>, textContent: <Text textName={textComplain}/>, divider: <Divider />}
// ].map(generateId)

export function Menu() {
  //const [list, setList] = React.useState(MENULIST);
  return (
    <div className={styles.menu}>
      <Dropdown  
        button={
        <button className={styles.menuButton}> 
          <MenuIcon />
        </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId='1234'/>
          <button className={styles.closeButton}>
            <Text desktopSize={14} tabletSize={14} mobileSize={12} size={12} color={EColor.gray66}>
              Закрыть
            </Text>
          </button>
        </div>
        {/* <ul className={styles.dropdown}>
            <GenericList list={list}/>
            <CloseButton />
        </ul> */} 
      </Dropdown>
    </div>
  );
}


