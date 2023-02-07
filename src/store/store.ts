import { Reducer, ActionCreator } from '@reduxjs/toolkit'
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './me/action';
import { meReducer, MeState } from './me/reducer';

export type RootState  = {
    commentText: string,
    token: string;
    me: MeState;
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
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
};

type MyAction = updateCommentAction 
    | SetTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            };
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text,
            };
        case ME_REQUEST:
        case ME_REQUEST_SUCCESS:
        case ME_REQUEST_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action),
            } 
        default: 
            return state;
    }
}