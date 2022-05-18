import { TableContainer } from "./styles"
import { useSchedules } from "../../Providers/schedules"
import { useDataUser } from "../../Providers/dataUser"

const Calendar = () =>{

    const {schedules} = useSchedules()
    const {dataUser} = useDataUser()

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
    const schedulesDefeault= ['09:00', '10:00', '11:00','13:00','14:00', '15:00', '16:00']

    const today = new Date()
    const day = today.getDate()
    const month = months[today.getMonth()]  
    
    const nesxtSevenDays = ()=>{
        let arr = []

        for(let i = day; i<day+7; i++){
            arr.push(i)
        }
        return(arr)
    }
    
        
    

    return(
       <TableContainer>
           <h1>{month}</h1>
           <div className="table">
               {nesxtSevenDays().map(day=>{
                   const date = `${day}/${today.getMonth()+1}/${today.getFullYear()}`
                   const appointmentsToday = schedules.filter(appointment => appointment.date === date).filter(appointment => appointment.staffId === dataUser.id.toString())
                   
                   return(
                   <div className="table-column">
                       <span>{day}</span>
                       {schedulesDefeault.map(horario=>{
                           const appointment =  appointmentsToday.length > 0 ? appointmentsToday.find(appointment => appointment.time === horario) : false
                           const scheduleCheck = !!appointment 
                           console.log(scheduleCheck)
                        return(
                          <span><button id={scheduleCheck && 'confirmed'}>{horario}</button></span> 
                       )})}

                   </div>
                   
               )}
               )}
           </div>
                      

       </TableContainer>
    )
}

export default Calendar