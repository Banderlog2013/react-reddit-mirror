import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState, setToken } from "../../store";


export function TokenWrapper() {
    const token = useSelector<RootState, string>(state => state.token);
    const dispatch = useDispatch();
    //console.log(token)
    useEffect(() => {
        if (window.__token__) {
            dispatch(setToken(window.__token__));
        }
    }, [dispatch]);

    return token
}
