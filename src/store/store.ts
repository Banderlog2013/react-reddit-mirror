import { Reducer, ActionCreator } from '@reduxjs/toolkit'

export type RootState  = {
    commentText: string,
    token: string;
}

const UPDATE_COMMENT = 'UPDATE_COMMENT';
type updateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string;
}

export const updateComment: ActionCreator<updateCommentAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

const SET_TOKEN = 'SET_TOKEN';
type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string;
}
export const setToken: ActionCreator<SetTokenAction> = (token) => ({
    type: SET_TOKEN,
    token
});

const initialState: RootState = {
    commentText: 'Привет Мир!',
    token: ''
};

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            }
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            }
        default: 
            return state;
    }
}