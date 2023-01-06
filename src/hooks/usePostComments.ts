import { useContext, useEffect, useState,  } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/Context/tokenContext";

export function useComments() {
    const [comments, setComments] = useState([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        if (token && token.length > 0 && token != 'undefined') {
            axios.get('https://oauth.reddit.com/comments/${id}', {
            headers: { Authorization: `bearer ${token}` },
            params: { limit: 10 },
            }).then((resp) => {
                const postComments = resp.data.data.children;
                setComments(postComments);
                console.log(postComments)
            }).catch(console.log);
        }

    }, [token])
    return [comments]
}
