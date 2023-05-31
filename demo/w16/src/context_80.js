import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext_80 = React.createContext();

const AppProvider_80 = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTeam] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = async () => {
      setLoading(false);
      try{
        const response = await fetch(`${url}${searchTerm}`);
        const data = await response.json();
        console.log('drinks', data);  
        const { drinks } = data;
        if(drinks) {
          const newCocktails = drinks.map((item)=>{
            const {idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass} = item;
            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass:strGlass,
            }
          })
          setCocktails(newCocktails);
        }else{
          setCocktails([]);
        }
        setLoading(false);
      }catch(error){
        console.log(error);
        setLoading(false);
      }
  }

  useEffect(()=>{
    fetchDrinks();
  }, []);

  return (
    <AppContext_80.Provider value={{loading, cocktails}}>{children}</AppContext_80.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext_80);
};

export { AppContext_80, AppProvider_80 };
