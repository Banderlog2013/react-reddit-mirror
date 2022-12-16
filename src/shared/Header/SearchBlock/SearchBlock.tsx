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
      if (token && token.length > 0 != undefined) {
        axios.get('https://oauth.reddit.com/api/v1/me', {
          headers: { 'Authorization': `Bearer ${'1558409938014-wIAqrRfw1NfFJO6gTuELeCFUBml8LA'}`  }
        }).then((resp) => {
          const userData = resp.data;
          setData({ name: userData.name, iconImg: userData.icon_img });
        }).catch(console.log);
      };
    }, [token])

  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name}/>
    </div>
  );
}


// useEffect(() => {
//   axios.get('https://oauth.reddit.com/api/v1/me?sr_detail=true', {
//     headers: { Authorization: `bearer ${token}` }
//   }).then((resp) => {
//     const userData = resp.data;
//     setData({name: userData.name, iconImg: userData.icon_img});
//     console.log(userData);
//   }).catch(console.log)

// }, [token])