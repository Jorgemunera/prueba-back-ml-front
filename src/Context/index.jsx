import { createContext, useState } from "react";

const MarketContext = createContext()

const MarketContextProvider = ({children}) => {
    // estado para cantidad de productos total
    const [items, setItems] = useState([]);

    // estado para ver el token y saber si esta logueado
    const [token, setToken] = useState(null);

    //estado para ver si es administrador y mostrar el filtro
    const [isAdministrator, setIsAdministrator] = useState(false);
    const showFilterAdmin = () => setIsAdministrator(true);
    const hideFilterAdmin = () => setIsAdministrator(false);

    const [ isLogued, setIsLogued] = useState(false);
    // estado para productos a renderizar en order
    const [productsComprados, setProductsComprados] = useState([]);


    return (
        <MarketContext.Provider value={{
            items,
            setItems,
            token,
            setToken,
            isAdministrator,
            showFilterAdmin,
            hideFilterAdmin,
            productsComprados,
            setProductsComprados,
            isLogued,
            setIsLogued
        }}>
            {children}
        </MarketContext.Provider>
    )
}

export {MarketContextProvider, MarketContext}
