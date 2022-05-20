import { TableContainer } from "./styles"
import { useSchedules } from "../../Providers/schedules"
import { useEffect, useState } from "react"
import { cookieStorageManager } from "@chakra-ui/react"
import Button from "../Button"
import { useRef } from "react"
import {useDataUser} from "../../Providers/dataUser"
import { useIsLoggedIn } from "../../Providers/isLoggedIn" 
import api from "../../services"
import { useToast } from '@chakra-ui/react';
import { useHistory } from "react-router-dom"

const Calendar = ({idPsico, isPatient = false}) =>{
    
    const {schedules, setUpDate, upDate} = useSchedules()
    const {dataUser} = useDataUser()
    const {token} = useIsLoggedIn()

    const history = useHistory()
    
    const toast = useToast()

    const [week, setWeek] = useState([])

    const [confirmSchedule, setConfirmSchedule] = useState(false)
    const [timeSelect, setTimeSelect] = useState('')
    const [scheduleDate, setScheduleDate] = useState('')

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

    const classSelected = useRef('selected')


    const onClickFunction = (event, appoint, date, time) =>{   
        
        
        if(isPatient){

            if(!!!appoint){

                if(!confirmSchedule || event.target.className === 'selected' ){
                    if(!!!event.target.className){
                        event.target.className = 'selected'                    
                        setConfirmSchedule(true)
                        setTimeSelect(time)
                        setScheduleDate(`${date}/2022`)   

                    }
                    else{
                        event.target.className = ''                    
                        setConfirmSchedule(false)
                        setTimeSelect('')
                        setScheduleDate('')
                    }    
                }                       
            }            
        }
        else{
            if(!!appoint){
                history.push('/agendapsicologo')
            }
        }       
    }

    const confirmAppointment = () =>{
        const staffId = idPsico        
        const userId = dataUser.id.toString()
        const date = scheduleDate
        const time = timeSelect

        const bodyAppointment = {staffId, userId, date, time}

        api.post('/appointments', bodyAppointment, {
            headers: {
                Authorization: `Bearer ${token}`,
              }
        }).then(response => {

            setUpDate(!upDate)
            setConfirmSchedule(false)
            setTimeSelect('')
            setScheduleDate('')

            toast({
            title: 'Agendamento realizado com sucesso!',
            position: 'top-right',
            status: 'success',
            duration: 6000,
            isClosable: true,
          })})
        .catch(err=>console.log(err))     

    }   
    
    useEffect(()=>{
        const newWeek = currentWeek()        
        setWeek(newWeek)
    }, [idPsico])
       
    return(
       <TableContainer btnConfirm={confirmSchedule}>
           
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
                                <span key={horario}><button ref={classSelected}
                                 id={scheduleCheck ? 'confirmed' : undefined} onClick={(event) => onClickFunction(event, appointment, currentDay, horario)}>
                                    {horario}
                                </button></span>

                               )
                           }                   
                                                     
                                                 
                       })}

                   </div>                   
               )}
               )}
           </div>

          <button className="btn-confirm" onClick={confirmAppointment}>Confirmar Consulta</button>           

       </TableContainer>
    )
}

export default Calendar