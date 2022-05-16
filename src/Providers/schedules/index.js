import { createContext, useState, useContext } from 'react';

export const SchedulesContext = createContext([]);

export const SchedulesProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);

  return (
    <SchedulesContext.Provider value={{ schedules }}>
      {children}
    </SchedulesContext.Provider>
  );
};

export const useSchedules = () => useContext(SchedulesContext);
