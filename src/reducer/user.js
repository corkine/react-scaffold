import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function usePrepareAuth() {
    const [user, setUser] = useState(null);
    const nav = useNavigate();
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user') ?? "{}")
        if (data.user && data.pass) {
            setUser(data.user);
        } else {
            nav("/login");
        }
    }, [])
    return {
        user, login: (user, pass) => {
            localStorage.setItem('user', JSON.stringify({ user, pass }));
            setUser(user);
        }, logout: () => {
            localStorage.removeItem('user');
            setUser(null);
            nav("/login")
        }
    };
}

export const AuthContext = createContext({
    user: null,
    login: () => { },
    logout: () => { }
});

export const useAuth = () => useContext(AuthContext);