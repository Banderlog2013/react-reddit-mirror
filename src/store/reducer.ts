import { Reducer } from '@reduxjs/toolkit'
import { CODE, SaveCodeAction, updateCommentAction, UPDATE_COMMENT } from './action';
import { MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, ME_REQUEST, ME_REQUEST_ERROR, ME_REQUEST_SUCCESS } from './me/action';
import { meReducer, MeState } from './me/reducer';
import { SaveTokenAction, SAVE_TOKEN } from './action';

export type RootState  = {
    code: string,
    token: string,
    me: MeState,
    commentText: string
};

const initialState: RootState = {
    code: '',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    },
    commentText: 'Привет Мир!',
    
};

type MyAction = updateCommentAction 
    | SaveCodeAction
    | SaveTokenAction
    | MeRequestAction
    | MeRequestSuccessAction
    | MeRequestErrorAction;

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case CODE:
            return {
                ...state,
                code: action.code,
            };
        case SAVE_TOKEN:
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