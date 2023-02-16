import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList";
import { UserContextProvider } from "./shared/Context/userContext"
import { PostsContextProvider } from "./shared/Context/postsContext" 
import { applyMiddleware, legacy_createStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension';
import { Provider } from "react-redux";
import { rootReducer } from "./store/reducer";
import thunk from "redux-thunk";
import { getCode } from "./utils/react/getCode";

export const store = legacy_createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export function AppComponent() {
    getCode();
    return (
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
    );
}

export const App = hot(() => 
    <Provider store={store}>
        <AppComponent />
    </Provider>
);