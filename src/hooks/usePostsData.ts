import { useEffect, useState } from "react";
import axios from 'axios';
import { useSelector } from "react-redux";
import { RootState } from "../store/reducer";

export function usePostsData() {
    const [posts, setPosts] = useState([]);
    const token = useSelector<RootState, string>(state => state.token);

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