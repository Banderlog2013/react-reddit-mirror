import React, { useState } from "react";
import { useComments } from "../../hooks/useComments";

type commentsContextType = {
    value: string;
    onChange: (value: string) => void;
}

export const commentsContext = React.createContext<commentsContextType>({
    value: '',
    onChange: () => {}
});

export function CommentContextProvider({children}: {children: React.ReactNode}) {
    //const [comments, setComments] = useComments();
    const [comments, setComments] = useState('');
    return (
        <commentsContext.Provider value={{
            value: comments, 
            onChange: (newComments: string) => {
                setComments(newComments);
            }}}>

            {children}
        </commentsContext.Provider>
    )
}