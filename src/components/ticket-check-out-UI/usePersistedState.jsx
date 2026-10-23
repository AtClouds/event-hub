import { useState, useEffect } from "react";


 // SessionStorage hook 
    export function usePersistedState(key, initialValue) {
    const [value, setValue] = useState(() => {
        const saved = sessionStorage.getItem(key);
        return saved ? JSON.parse(saved) : initialValue;
    });

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue];
    }
