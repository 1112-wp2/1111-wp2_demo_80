import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const AppContext_80 = React.createContext();

const AppProvider_80 = ({ children }) => {
  return (
    <AppContext_80.Provider value='hello'>{children}</AppContext_80.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext_80);
};

export { AppContext_80, AppProvider_80 };
