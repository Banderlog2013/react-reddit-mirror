import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { store } from "../../App";
import { RootState, setToken } from "../../store/store";



export function userToken() {
    const token = useSelector<RootState, string>(state => state.token);
    //const dispatch = useDispatch();
    useEffect(() => {
        if (window.__token__) {
            store.dispatch(setToken(window.__token__));
        }
    }, []);

    return token
}
