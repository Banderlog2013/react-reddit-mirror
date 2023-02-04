import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList";
import { UserContextProvider } from "./shared/Context/userContext"
import { PostsContextProvider } from "./shared/Context/postsContext" 
import { legacy_createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from "react-redux";
import { rootReducer } from "./store";


export const store = legacy_createStore(rootReducer, composeWithDevTools());

export function AppComponent() {

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

export const App = hot(() => 
    <Provider store={store}>
        <AppComponent />
    </Provider>
);