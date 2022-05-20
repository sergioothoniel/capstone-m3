import { Flex, Image, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useSchedules } from '../../Providers/schedules';
import {usePsychologists} from '../../Providers/psychologists'
import { BiArrowBack } from 'react-icons/bi';
import Lottie from 'react-lottie';
import animationData from '../../lotties/emptyAnimation.json';
import { useCallback, useEffect, useState } from 'react';
import { CardPsicologo } from '../../components/CardPsicologo';
import Avatar from '../../assets/imagens/Avatar.svg'
const AgendaPaciente = () => {

  const { schedules } = useSchedules();
  const { psychologists } = usePsychologists();
  //staff id = psychologist user id
  console.log(psychologists)
  const localStorageInfo = JSON.parse(localStorage.getItem('@psique/token'));

  const id = localStorageInfo.user.id;

  const history = useHistory();

  const [userSchedules, setUserSchedules] = useState([]);

  const getUserSchedules = useCallback(() => {
    const getSchedules = schedules.filter(
      ({ userId }) => userId === id.toString()
    );

    setUserSchedules(getSchedules);
  }, [id, schedules]);

  useEffect(() => {
    getUserSchedules();
  }, [getUserSchedules]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Flex direction="column" alignItems="center">
      {userSchedules.length === 0 ? (
        <Flex direction="column" height="100vh" pt="15px">
          <Flex marginLeft="15px" cursor="pointer">
            <BiArrowBack
              size="30px"
              cursor="pointer"
              onClick={() => history.push('/dashboardPaciente')}
            />
          </Flex>
          <Flex
            height="70px"
            width="100vw"
            mt="15px"
            justifyContent="center"
            alignItems="center"
            bg="primary.100"
            color="white.200"
            fontSize="22px"
            fontWeight="600"
          >
            <Text fontSize="22px" fontWeight="500">
              Histórico de consultas
            </Text>
          </Flex>
          <Flex
            height="90%"
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignSelf="center"
          >
            <Text fontSize={['16px', '22px']}>
              Você ainda não possui nenhuma consulta
            </Text>
            <Lottie options={defaultOptions} height={260} width={300} />
          </Flex>
        </Flex>
      ) : (
        <Flex direction="column">
          <BiArrowBack
            size="30px"
            onClick={() => history.push('/dashboardPaciente')}
          />
          <Flex
            height="70px"
            width="100vw"
            mt="15px"
            justifyContent="center"
            alignItems="center"
            bg="primary.100"
            color="white.200"
            fontSize="22px"
            fontWeight="600"
          >
            <Text fontSize="22px" fontWeight="500">
              Histórico de consultas
            </Text>
          </Flex>
          <Flex width="100%" flexDir="column" paddingTop="15px" paddingX="20px" align="center">


            {schedules.map(apointment=>(
             
        <Flex maxW="1000px" alignSelf="center" key={apointment.id} width="100%" border="1px solid" borderColor="primary.0" height="80px" paddingBottom="20px" marginBottom="10px" borderRadius="10px">
         
            <Flex>
              <Image paddingTop="5px" src={Avatar} width="90px" height="70px"></Image>
            </Flex>
            <Flex flexDir="column">
             <Text fontWeight="500">{
        psychologists.filter((key)=> Number(key.userId) === Number(apointment.staffId))[0]?.name
             
             }</Text>
          
             <Text>
               {apointment.date}
             </Text>
             <Text fontSize="13px">
               {apointment.time}
             </Text>

            </Flex>
         </Flex>
      ))}


          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default AgendaPaciente;
