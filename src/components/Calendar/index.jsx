import { TableContainer } from "./styles"
import { useSchedules } from "../../Providers/schedules"
import { useEffect, useState } from "react"
import { cookieStorageManager } from "@chakra-ui/react"

const Calendar = ({idPsico, isPatient = false}) =>{
    
    const {schedules} = useSchedules()
    
    const [week, setWeek] = useState([])

    //const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const schedulesDefeault= ['09:00', '10:00', '11:00','13:00','14:00', '15:00', '16:00']
    const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']

    const today = new Date()
    const day = today.getDate()
      
       
    const currentWeek = (week = 0)=>{
        const arrWeek = []
        const firstDay = day+7*week

        for(let i = firstDay; i<firstDay+7; i++){
            const newDate = new Date(2022, today.getMonth(), i)
            arrWeek.push(newDate)
        }
        return arrWeek
    }
    
    useEffect(()=>{
        const newWeek = currentWeek()        
        setWeek(newWeek)
    }, [idPsico])
           

    return(
       <TableContainer>
           
           <h1>2022</h1>
           <div className="table">
               {week.map(date=>{
                   const dateFormated = date.toLocaleDateString('pt-BR')
                   const appointmentsToday = schedules.filter(appointment => appointment.date === dateFormated).filter(appointment => appointment.staffId === idPsico.toString())
                   const currentDay = dateFormated.slice(0, -5)
                   const dayOfWeek = daysOfWeek[date.getDay()]
                 

                   return(
                   <div key={currentDay} className="table-column">
                       <span>{currentDay}</span>
                       <span>{dayOfWeek}</span>
                       {schedulesDefeault.map(horario=>{
                           const appointment =  appointmentsToday.length > 0 ? appointmentsToday.find(appointment => appointment.time === horario) : false
                           const scheduleCheck = !!appointment    
                           
                           if(dayOfWeek === 'Sab' || dayOfWeek === 'Dom'){
                               return(
                                   <span id='fds' key={horario}>

                                   </span>
                               )
                           }else{
                               return(
                                <span key={horario}><button id={scheduleCheck ? 'confirmed' : undefined} onClick={()=>console.log(appointment)}>{horario}</button></span>

                               )
                           }                   
                                                     
                                                 
                       })}

                   </div>                   
               )}
               )}
           </div>
                      

       </TableContainer>
    )
}

export default Calendar