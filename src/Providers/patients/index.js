import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import { useIsLoggedIn } from '../isLoggedIn';
import api from '../../services';

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {

  const {token} = useIsLoggedIn()  

  const [patients, setPatients] = useState([]);
  
  useEffect(()=>{
    api.get('/patients',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response=>setPatients(response.data))
    .catch(err=>console.log(err))
  }, [token])

  return (
    <PatientsContext.Provider value={{ patients }}>
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatients = () => useContext(PatientsContext);
