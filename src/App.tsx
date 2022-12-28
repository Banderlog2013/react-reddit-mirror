import React, { useContext } from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList";
import { useToken } from "./hooks/useToken"
import { tokenContext } from "./shared/Context/tokenContext";
import { UserContextProvider } from "./shared/Context/userContext"
import { generateId, generateRandomString } from "./utils/react/generateRandomIndex";
import { postsContext } from "./shared/Context/postsContext";
import { GenericList } from "./shared/GenericList/GenericList";
import { PostsContextProvider } from "./shared/Context/postsContext" 

function AppComponent() {
    // const LIST = [
    //     {As: 'li' as const},
    // ].map(generateId)

    // const [list, setList] = React.useState(LIST);
    // const handleItemClick = (id: string) => {
    //     setList(list.filter((item) => item.id != id));
    // }


    // const handleAdd = () => {
    //     setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})));
    // }

    const [token] = useToken();
    //const [posts] = useContext(postsContext)

    return (
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
    );
}

export const App = hot(() => <AppComponent />);