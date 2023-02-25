import React from "react";
import { useLocation } from "react-router-dom";
import styles from './page404.css'

export function Page404() {
    const location = useLocation();
    if (location.pathname === '/posts') {
        return null; // не рендерить компонент на странице с постами
    }
    
    return (
        <div>
            <p className={styles.error404}>Ошибка 404 — страница не найдена</p>
        </div>
    )
}