import { createContext, useState, useContext, useEffect } from 'react';
import { IsLoggedInContext } from '../isLoggedIn';
import api from '../../services';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const { isLoggedIn, token, dataUser } = useContext(IsLoggedInContext);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .get(`/${dataUser.type}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => {
          const userInfo = res.data.filter(user => user.userId === dataUser.id);
          setUser(userInfo);
        })
        .catch(err => console.log(err));
    }
  }, [isLoggedIn]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
