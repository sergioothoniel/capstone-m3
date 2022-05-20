import { createContext, useState, useEffect, useContext } from 'react';

export const IsLoggedInContext = createContext();

export const IsLoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem('@psique/token'));
    if (localStorageData) {
      setToken(localStorageData.accessToken);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <IsLoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
      }}
    >
      {children}
    </IsLoggedInContext.Provider>
  );
};

export const useIsLoggedIn = () => useContext(IsLoggedInContext);
