import { Action, ActionCreator, ThunkAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./reducer";

export const CODE = 'CODE';
export type SaveCodeAction = {
    type: typeof CODE,
    code: string,
};

export const saveCode: ActionCreator<SaveCodeAction> = (code) => ({
    type: CODE,
    code,
});

export const SAVE_TOKEN = 'SAVE_TOKEN';
export type SaveTokenAction = {
    type: typeof SAVE_TOKEN;
    token: string;
}

export const saveToken: ActionCreator<SaveTokenAction> = (token) => ({
    type: SAVE_TOKEN,
    token
});

export const UPDATE_COMMENT = 'UPDATE_COMMENT';
export type updateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}

export const updateComment: ActionCreator<updateCommentAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

export const requestToken = (code: any): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
    //console.log("requestToken code:", code);
    axios.post('https://www.reddit.com/api/v1/access_token', 
        `grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:3000/auth`,
        { 
            auth: { username: process.env.CLIENT_ID || '', password: '6SHkMWJ_yz1PBl5DN3CBQlb-xp0Hhg' },
            headers: { 'Content-type': 'application/x-www-form-urlencoded' },
        }
    ).then(({ data }) => {
        //console.log({data})
        const token = data.access_token;
        dispatch(saveToken(token));
    }).catch(console.log) 
}

 

  
  
  
  
  