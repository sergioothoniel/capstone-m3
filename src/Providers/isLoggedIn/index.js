import { createContext, useState, useEffect } from 'react';

export const IsLoggedInContext = createContext();

export const IsLoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
    

  return (
    <IsLoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken       
      }}
    >
      {children}
    </IsLoggedInContext.Provider>
  );
};
