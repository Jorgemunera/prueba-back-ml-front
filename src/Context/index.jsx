import { createContext, useState } from "react";

const MarketContext = createContext()

const MarketContextProvider = ({children}) => {
    const [items, setItems] = useState(null);
    const [token, setToken] = useState('');

    return (
        <MarketContext.Provider value={{
            items,
            setItems,
            token,
            setToken
        }}>
            {children}
        </MarketContext.Provider>
    )
}

export {MarketContextProvider, MarketContext}
