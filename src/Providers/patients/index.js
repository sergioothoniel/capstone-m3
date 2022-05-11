import { createContext, useState } from 'react';

export const PatientsContext = createContext();

export const PatientsProvider = ({ children }) => {
  const [patients, setPatients] = useState([]);

  return (
    <PatientsContext.Provider value={{ patients }}>
      {children}
    </PatientsContext.Provider>
  );
};
