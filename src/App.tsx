import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken"
import { tokenContext } from "./shared/Context/tokenContext";
import { UserContextProvider } from "./shared/Context/userContext"

function AppComponent() {
    const [token] = useToken();

    return (
        <tokenContext.Provider value={token}>
            <UserContextProvider>
                <Layout>
                    <Header/>
                        <Content>
                            <CardsList />
                            <CardsList />
                        </Content>    
                </Layout>
            </UserContextProvider>     
        </tokenContext.Provider>
    );
}

export const App = hot(() => <AppComponent />);