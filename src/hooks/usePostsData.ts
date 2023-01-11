import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import { tokenContext } from "../shared/Context/tokenContext";

export function usePostsData() {
    const [posts, setPosts] = useState([]);
    const token = useContext(tokenContext);

    useEffect(() => {
        if (token && token.length > 0 && token != 'undefined') {
            axios.get('https://oauth.reddit.com/best.json?sr_detail=true', {
            headers: { Authorization: `bearer ${token}` },
            }).then((resp) => {
                const postsData = resp.data.data.children;
                setPosts(postsData);
                //console.log(postsData)
            }).catch(console.log);
        }

    }, [token])
    return [posts]
}