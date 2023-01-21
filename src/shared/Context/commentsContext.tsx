import React from "react";

type commentsContextType = {
    value: string;
    onChange: (value: string) => void;
}

export const commentsContext = React.createContext<commentsContextType>({
    value: '',
    onChange: () => {}
});
