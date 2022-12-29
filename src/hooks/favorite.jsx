import { createContext, useContext, useState, useEffect } from 'react';

export const FavoriteContext = createContext({});

function FavoriteProvider({ children }) {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem(`@foodexplorer:favorites`)) || []);

  function addProductToFavorite(data) {
    setFavorites([...favorites, data])
  }

  function removeProductFromFavorite(data) {
    setFavorites(favorites.filter((product) => product.id !== data.id))
  }

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:favorites`, JSON.stringify(favorites));
  }, [favorites])

  return (
    <FavoriteContext.Provider value={{ 
      favorites,
      addProductToFavorite,
      removeProductFromFavorite
    }}>
      { children }
    </FavoriteContext.Provider>
  )
}

function useFavorite() {
  const context = useContext(FavoriteContext);
  return context;
}

export { FavoriteProvider, useFavorite };