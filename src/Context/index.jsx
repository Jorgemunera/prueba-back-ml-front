import { createContext, useState, useEffect } from "react";

const MarketContext = createContext()

const MarketContextProvider = ({ children }) => {
  // estado para cantidad de productos total
  const [items, setItems] = useState([]);

  // productos filtrados por nombre
  const [filteredItems, setFilteredItems] = useState([]);

  // estado para ver el token y saber si esta logueado
  const [token, setToken] = useState(null);

  //estado para ver si es administrador y mostrar el filtro
  const [isAdministrator, setIsAdministrator] = useState(false);
  const showFilterAdmin = () => setIsAdministrator(true);
  const hideFilterAdmin = () => setIsAdministrator(false);

  // estado para el logueo
  const [isLogued, setIsLogued] = useState(false);

  // estado para productos a renderizar en order
  const [productsComprados, setProductsComprados] = useState([]);

  // estado para productos a renderizar en inventory
  const [productsToSale, setProductsToSale] = useState([]);

  // estado para el buscador
  const [searchByName, setSearchByName] = useState('');


  const filteredItemsByName = (items, searchByName) => {
    return items?.filter((item) => item.name.toLowerCase().includes(searchByName.toLowerCase()))
  }

  useEffect(() => {
    if (searchByName) setFilteredItems(filteredItemsByName(items, searchByName))
  }, [items, searchByName])

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
      setIsLogued,
      searchByName,
      setSearchByName,
      filteredItems,
      productsToSale,
      setProductsToSale
    }}>
      {children}
    </MarketContext.Provider>
  )
}

export { MarketContextProvider, MarketContext }
