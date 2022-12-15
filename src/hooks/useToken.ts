import React, { useEffect, useState } from "react"

export function useToken() {
    const [token, setToken] = useState(''); // сохраняем токен в состояние
    
    useEffect(() => { // проверяем токе
        if (window.__token__) {
            setToken
        }
    }, [])

    return [token]
}