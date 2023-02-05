import { useEffect } from "react"
import { store } from "../../App";
import { setToken } from "../../store/store";



export function userToken() {
    // const token = useSelector<RootState, string>(state => state.token);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     if (window.__token__) {
    //         dispatch(setToken(window.__token__));
    //     }
    // }, [dispatch]);

    // return token

    useEffect(() => {
        const token = localStorage.getItem('token') || window.__token__;
        store.dispatch(setToken(token));
        if (token) {
            localStorage.setItem('token', token);
        }
    }, [])  
}
