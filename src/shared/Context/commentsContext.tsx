import React from "react";
import { useComments } from "../../hooks/usePostComments";

type commentsContextType = {
    value: string;
    onChange: (value: string) => void;
}

export const commentsContext = React.createContext<commentsContextType>({
    value: '',
    onChange: () => {}
});

// export function CommentContextProvider({children}: {children: React.ReactNode}) {
//     const [comments] = useComments();
//     return (
//         <commentsContext.Provider value={comments}>
//             {children}
//         </commentsContext.Provider>
//     )

// }