import { createContext, useState, useContext, useEffect } from 'react';
import { IsLoggedInContext } from '../isLoggedIn';
import { DataUserContext } from "../dataUser"
import api from '../../services';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  const { isLoggedIn, token } = useContext(IsLoggedInContext);
  const {dataUser} = useContext(DataUserContext)

  useEffect(() => {
    if (isLoggedIn) {
      api
        .get(`/${dataUser.type}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(res => {
           const userInfo = res.data.find(user => user.userId === dataUser.id);
           setUser(userInfo);
        })
        .catch(err => console.log(err));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  );
};
