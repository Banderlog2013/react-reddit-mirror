import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList";
import { UserContextProvider } from "./shared/Context/userContext"
import { PostsContextProvider } from "./shared/Context/postsContext" 
import { Action, applyMiddleware, legacy_createStore, Middleware } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from "react-redux";
import { rootReducer, RootState } from "./store/store";
import thunk, { ThunkAction } from "redux-thunk";
import { userToken } from "./utils/react/userToken";

export const store = legacy_createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export function AppComponent() {
    userToken();
    return (
        <Provider store={store}>
            <UserContextProvider>
                <Layout>
                    <Header/>
                        <Content>
                            <PostsContextProvider>
                                <CardsList />
                            </PostsContextProvider>
                        </Content>    
                </Layout>
            </UserContextProvider>     
        </Provider> 
    );
}

export const App = hot(() => <AppComponent />
    
);