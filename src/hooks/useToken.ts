import { useEffect, useState } from "react"

export function useToken() {
    const [token, setToken] = useState(''); // сохраняем токен в состояние]
    console.log(token)
    useEffect(() => { 
        if (window.__token__) {
            setToken(window.__token__);
        }
    }, [])
    return [token] 
}