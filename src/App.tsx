import React, { useState } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken"
import { tokenContext } from "./shared/Context/tokenContext";
import { UserContextProvider } from "./shared/Context/userContext"
import { PostsContextProvider } from "./shared/Context/postsContext" 
import { commentContext } from "./shared/Context/commentContext";

function AppComponent() {

    const [token] = useToken();
    const [commentValue, setCommentValue] = useState('');

    const CommentProvider = commentContext.Provider;

    return (
        <CommentProvider value={{
            value: commentValue,
            onChange: setCommentValue,
        }}>
            <tokenContext.Provider value={token}>
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
            </tokenContext.Provider>
        </CommentProvider>
        
    );
}

export const App = hot(() => <AppComponent />);