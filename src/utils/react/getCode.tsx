import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducer";
import { requestToken, saveCode } from "../../store/action";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "@reduxjs/toolkit";

export function getCode() {
    const code = '';
    const dispatch: ThunkDispatch<RootState, unknown, Action<string>> = useDispatch();
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get('code');
        if (code) {
            dispatch(saveCode(code));
            dispatch(requestToken(code));
        }
    }, [dispatch]);
    return code;
}