import React from "react";
import './main.global.css';
import { hot } from "react-hot-loader/root";
import { Layout } from "./shared/Layout/Layout";
import { Header } from "./shared/Header/Header";
import { Content } from "./shared/Content/Content";
import { CardsList } from "./shared/CardsList";
import { generateRandomString, assignId, generateId } from "./utils/react/generateRandomIndex";
import { GenericList } from "./shared/GenericList/GenericList";
import { merge } from "./utils/js/merge";
import { Dropdown } from "./shared/Dropdown";
import { Text } from "./shared/Text";

const LIST = [
    {As: 'li' as const, text: 'some'},
    {As: 'li' as const, text: 'other some'},
    {As: 'li' as const, text: 'some'}
].map(generateId)

function AppComponent() {
    const [list, setList] = React.useState(LIST);

    const handleItemClick = (id: string) => {
        setList(list.filter((item) => item.id != id));
    }

    const handleAdd = () => {
        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})));
        
    }

    return (
        <Layout>
            <Header />
            <Content>
                <CardsList />
                <CardsList />
            </Content>
            
        </Layout>
    );
}

export const App = hot(() => <AppComponent />);