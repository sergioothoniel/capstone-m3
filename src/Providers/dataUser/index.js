import { createContext, useState, useEffect, useContext } from 'react';
import { IsLoggedInContext } from '../isLoggedIn';

export const DataUserContext = createContext();

export const DataUserProvider = ({children}) =>{
    const [dataUser, setDataUser] = useState({id: '3', type: 'staff'})

    const {isLoggedIn } = useContext(IsLoggedInContext)

    useEffect(() => {
        
        if (isLoggedIn) {  
            const localStorageData = JSON.parse(localStorage.getItem('@psique/token'))
            setDataUser(localStorageData.user);
          }
        
      }, []);   


    return(
        <DataUserContext.Provider value={{ dataUser}}>
            {children}
        </DataUserContext.Provider>
    )

}