import React from 'react';
import { Break } from '../../../Break';
import { AnonIcon } from '../../../Icons';
import { EColor, Text } from '../../../Text';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string,
  username?: string
}

export function UserBlock({avatarSrc, username}: IUserBlockProps) {
  return (
    <a 
    href='https://www.reddit.com/api/v1/authorize?client_id=Q87_eZMuvXUy0_wn_O6rPw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity' className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage} />
          : <AnonIcon />
        }
      </div>

      <div className={styles.username}>
        <Break size={12} />
        <Text size={20} color={username ? EColor.black : EColor.gray99}>{username || 'Аноним'}</Text>
      </div>  
    </a>
  );
}
