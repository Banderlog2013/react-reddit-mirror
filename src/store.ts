import { Reducer, ActionCreator, AnyAction } from '@reduxjs/toolkit'
import { TokenWrapper } from './shared/TokenWrapper';

const UPDATE_COMMENT = 'UPDATE_COMMENT',
      SET_TOKEN = 'SET_TOKEN';

export type RootState  = {
    commentText: string,
    token: string;
}

const initialState: RootState = {
    commentText: 'Привет Мир!',
    token: ''
};

export const updateComment: ActionCreator<AnyAction> = (text) => ({
    type: UPDATE_COMMENT,
    text
});

export const setToken: ActionCreator<AnyAction> = (token) => ({
    type: SET_TOKEN,
    token
});

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