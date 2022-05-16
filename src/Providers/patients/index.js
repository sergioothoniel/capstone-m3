import { createContext, useContext, useState } from 'react';
import api from '../../services';

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  const getPatients = () => {};

  return (
    <PatientsContext.Provider value={{ patients }}>
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatients = () => useContext(PatientsContext);
