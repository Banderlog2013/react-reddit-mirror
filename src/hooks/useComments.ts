import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/Context/tokenContext";
import { ICardProps } from "../shared/CardsList/Card";


export function useComments({data}: ICardProps) {
    const [comments, setComments] = useState('');
    const token = useContext(tokenContext);
    const id = data.id;
    //console.log(id);

    useEffect(() => {
        if (token && token.length > 0 && token != 'undefined') {
            axios.get(`https://oauth.reddit.com/comments/${id}`, {
            headers: { Authorization: `bearer ${token}` },
            }).then((resp) => {
                const postComments = resp.data[0].data.children;
                setComments(postComments);
                //console.log(postComments);
            }).catch(console.log);
        }

    }, [token])
    return [comments]
}
