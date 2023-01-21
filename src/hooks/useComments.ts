import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/Context/tokenContext";
import { ICardProps } from "../shared/CardsList/Card";

export function useComments({data}: ICardProps) {
    const [comments, setComments] = useState([]); // сохраняем комментарии и id поста
    const token = useContext(tokenContext);
    const id = data.id; // id поста
    if (!id) {
        console.log('not id');
    }

    useEffect(() => {
        if (token && token.length > 0 && token != 'undefined') {
            axios.get(`https://oauth.reddit.com/comments/${id}`, {
            headers: { Authorization: `bearer ${token}` },
            }).then((resp) => {
                //const postComments = resp.data.data.children;
                const postComments = resp.data[0].data.children;
                setComments(postComments);
                // setComments(postComments.map((item: { data: { id: string; body: string; author: string; created: number; }; }) => {
                //     return {
                //     id: item.data.id,
                //     comment: item.data.body,
                //     username: item.data.author,
                //     timestamp: item.data.created
                //     }
                // }));
                console.log(postComments);
                
            }).catch(console.log);
        }
        
    }, [token])
    return [comments]
}
