import { createContext, useState, useEffect } from 'react';
import api from '../../services';

export const IsLoggedInContext = createContext();

export const IsLoggedInProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState('');
  const [dataUser, setDataUser] = useState({});

  useEffect(() => {
    if (!isLoggedIn) {
      const localStorageData = JSON.parse(
        localStorage.getItem('@psique/token')
      );

      if (localStorageData) {
        setIsLoggedIn(true);
        setToken(localStorageData.accessToken);
        setDataUser(localStorageData.user);
      }
    }
  }, []);

  return (
    <IsLoggedInContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        token,
        setToken,
        dataUser,
        setDataUser,
      }}
    >
      {children}
    </IsLoggedInContext.Provider>
  );
};
