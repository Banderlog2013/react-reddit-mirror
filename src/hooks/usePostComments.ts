import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/Context/tokenContext";
import { ICardProps } from "../shared/CardsList/Card";

export function usePostComments({data}: ICardProps) {
    const [comments, setComments] = useState([]);
    const token = useContext(tokenContext);
    const postId = data.id;

    useEffect(() => {
        if (!data.id) {
            return console.log("postId is missing or invalid");  
        }

        if (token && token.length > 0 && token !== 'undefined') {
            axios.get(`https://oauth.reddit.com/comments/${postId}`, {
                headers: { Authorization: `bearer ${token}` },
            }).then((resp) => {
                const commentsData = resp.data[1].data.children;
                setComments(commentsData);
                console.log(comments)
            }).catch(console.log);
        }
    }, [token, data.id])

    return [comments];
}

