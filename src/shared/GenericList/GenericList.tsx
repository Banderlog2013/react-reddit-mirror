import React from "react";
import styles from '../CardsList/Card/Menu/Menu.css'

interface IItem {
    id: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    //icon?: React.ReactNode;
    //text?: React.ReactNode;
    //textContent?: React.ReactNode;
    //divider?: React.ReactNode
    menuitemslist: React.ReactNode
}

interface IGenericListProps {
    list: IItem[];
}

const noop = () => {};

export function GenericList({list}: IGenericListProps) {
    return (
        <>
        {list.map(({As = 'div', onClick = noop, className, id, href, menuitemslist}) => (
            <As
                className={className}
                onClick={() => onClick(id)}
                key={id}
                href={href}
            >
                {menuitemslist}
            </As>
        ))}
        </>
    );
}