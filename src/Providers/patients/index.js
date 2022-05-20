import { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';
import {useIsLoggedIn} from '../isLoggedIn'
import api from '../../services';

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  
  const [patients, setPatients] = useState([]);
  
  const {isLoggedIn} = useIsLoggedIn()
  
  useEffect(()=>{

    if(isLoggedIn){
      const token = JSON.parse(localStorage.getItem('@psique/token')).accessToken 
       
    api.get('/patients',{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response=>setPatients(response.data))
    .catch(err=>console.log(err)) 
    }   
    
  }, [isLoggedIn])

  return (
    <PatientsContext.Provider value={{ patients }}>
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatients = () => useContext(PatientsContext);
