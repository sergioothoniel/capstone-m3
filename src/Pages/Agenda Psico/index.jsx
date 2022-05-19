import { Flex } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { HeaderAgendaPsicologo, Header } from '../../components/Header';
import { FaixaTitulo, BtnVoltar, Cards, Content } from './styles';
import { useIsLoggedIn } from '../../Providers/isLoggedIn';
import CardPatient from '../../components/cardPatient';
import { useSchedules } from '../../Providers/schedules';
import { useDataUser } from '../../Providers/dataUser';
import { usePsychologists } from '../../Providers/psychologists';
import { usePatients } from '../../Providers/patients';
import { BiArrowBack } from 'react-icons/bi';
import { useEffect, useState } from 'react';
// import '../../assets/imagens/Avatar.';
function AgendaPsico() {
  
  const { isLoggedIn, setIsLoggedIn } = useIsLoggedIn();
  const { dataUser } = useDataUser();
  const history = useHistory();

  const [appointments, setAppointments] = useState([]);
  
  const { schedules } = useSchedules();
  const { patients } = usePatients();

  useEffect(() => {
        const newAppointments = schedules.filter(
      schedule => Number(schedule.staffId) === dataUser.id
    );
    setAppointments(newAppointments);
  }, [dataUser, schedules]);
   
  return (
    <>
      <Flex
        height="100vh"
        width="100vw"
        direction="column"
        bg="white.300"
        maxWidth="100%"
      >
        <Header>
          <HeaderAgendaPsicologo />
        </Header>
        <BtnVoltar>
          <BiArrowBack onClick={() => history.goBack()} size={30} />
        </BtnVoltar>
        <Content>
          <FaixaTitulo>Atendimentos</FaixaTitulo>
          <Cards>
            {appointments.map(schedule => {
              const patient = patients.find(
                patient => Number(schedule.userId) === patient.userId
              );
                                         
              return (
                
                <CardPatient
                  key={schedule.id}
                  //  img={schedule.img}
                  name={patient?.name}
                   date={schedule.date}
                   time={schedule.time}
                />
              );
            })}
          </Cards>
        </Content>
      </Flex>
    </>
  );
}

export default AgendaPsico;
