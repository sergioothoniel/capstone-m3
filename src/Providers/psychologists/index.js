import { createContext, useState, useContext, useEffect } from 'react';
import { IsLoggedInContext } from '../isLoggedIn';
import api from '../../services';

export const PsychologistsContext = createContext();

export const PsychologistsProvider = ({ children }) => {
  const [psychologists, setPsychologists] = useState([]);

  const { isLoggedIn, setIsLoggedIn, token } = useContext(IsLoggedInContext);

  useEffect(() => {
    if (isLoggedIn) {
      api
        .get('/staff', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(res => {
          setPsychologists([...psychologists, res.data]);
        })
        .catch(err => {
          console.log(err);
          localStorage.clear();
          setIsLoggedIn(false);
        });
    }
  }, [isLoggedIn]);

  return (
    <PsychologistsContext.Provider value={{ psychologists }}>
      {children}
    </PsychologistsContext.Provider>
  );
};

export const usePsychologists = () => useContext(PsychologistsContext);
