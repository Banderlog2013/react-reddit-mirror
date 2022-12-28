import { text } from "express";
import React from "react";

interface IItem {
    id: string;
    onClick?: (id: string) => void;
    className?: string;
    As?: 'a' | 'li' | 'button' | 'div';
    href?: string;
    icon?: React.ReactNode;
    text?: React.ReactNode;
}

interface IGenericListProps {
    list: IItem[];
}

const noop = () => {};

export function GenericList({list}: IGenericListProps) {
    return (
        <>
            {list.map(({As = 'div', onClick = noop, className, id, href}) => (
                <As
                    className={className}
                    onClick={() => onClick(id)}
                    key={id}
                    href={href}
                >
                    {text}
                </As>
            ))}
        </>
    );
}