import { createContext, useState, useContext, useEffect } from 'react';
import { IsLoggedInContext } from '../isLoggedIn';
import api from '../../services';

export const PsychologistsContext = createContext();

export const PsychologistsProvider = ({ children }) => {
  const [psychologists, setPsychologists] = useState([]);

  const { isLoggedIn, token } = useContext(IsLoggedInContext);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .get('/staff', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => {
          setPsychologists(res.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  return (
    <PsychologistsContext.Provider value={{ psychologists }}>
      {children}
    </PsychologistsContext.Provider>
  );
};
