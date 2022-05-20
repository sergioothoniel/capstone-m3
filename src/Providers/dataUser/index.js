import { createContext, useState, useEffect, useContext } from 'react';
import { IsLoggedInContext } from '../isLoggedIn';

export const DataUserContext = createContext();

export const DataUserProvider = ({ children }) => {
  const [dataUser, setDataUser] = useState({});
  const { isLoggedIn } = useContext(IsLoggedInContext);

  useEffect(() => {
    if (isLoggedIn) {
      const localStorageData = JSON.parse(
        localStorage.getItem('@psique/token')
      );
      setDataUser(localStorageData.user);
    }
  }, [isLoggedIn]);

  return (
    <DataUserContext.Provider value={{ dataUser }}>
      {children}
    </DataUserContext.Provider>
  );
};

export const useDataUser = () => useContext(DataUserContext);
