import React, { useEffect, useState } from 'react';
import styles from './searchBlock.css';
import { UserBlock } from './UserBlock';
import axios from 'axios';

interface ISearchBlockProps {
  token: string
}
interface IUserData {
  name?: string;
  iconImg?: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {
  const [data, setData] = useState<IUserData>({});
    useEffect(() => {
      if (!token || token === 'undefined') {
          return console.log(token)
      } else {
        axios.get('https://oauth.reddit.com/api/v1/me', {
          headers: { 'Authorization': `bearer ${token}`  },
        }).then((resp) => {
          const userData = resp.data;
          setData({ name: userData.name, iconImg: userData.icon_img.split('?')[0] });
        })//.catch(console.log);
      }
    }, [token])

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name}/>
    </div>
  );
}
