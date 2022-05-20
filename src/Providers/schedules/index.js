import { createContext, useState, useContext, useEffect } from 'react';
import api from '../../services/index'

export const SchedulesContext = createContext([]);

export const SchedulesProvider = ({ children }) => {
  const [schedules, setSchedules] = useState([]);
  const [upDate, setUpDate] = useState(false)

  useEffect(()=>{
    api.get('/appointments')
    .then(response=>setSchedules(response.data))
    .catch(err=>console.log(err))

  }, [upDate])

  return (
    <SchedulesContext.Provider value={{ schedules, setUpDate, upDate }}>
      {children}
    </SchedulesContext.Provider>
  );
};

export const useSchedules = () => useContext(SchedulesContext);
