import React, { useEffect, useState } from "react";
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
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Post } from "./shared/Post";
import { Redirect } from "react-router-dom";

export const store = legacy_createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

export interface ITitleProps {
    title?: string;
    postId: string;
}

export function AppComponent({postId}: ITitleProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    getCode();


    return (
        <>
            {mounted && (
                <BrowserRouter>
                    <Layout>
                        <Header/>
                            <Content>
                                <PostsContextProvider>
                                    <CardsList />
                                        <Switch>
                                            <Redirect exact from="/" to="/posts" />
                                            <Redirect exact from="/auth" to="/posts" />
                                            <Route path="/posts/:id">
                                                <Post postId={postId}  />
                                            </Route>
                                            <Route path="*">
                                                <p style={{'textAlign': 'center', 'fontWeight': 'bold', 'fontSize': '24px'}} >404 — страница не найдена</p>
                                            </Route>
                                        </Switch>
                                </PostsContextProvider>
                            </Content>    
                    </Layout>
                </BrowserRouter>
            )}
        </>
    );
}

export const App = hot(() => 
    <Provider store={store}>
        <AppComponent postId={""} />
    </Provider>
);