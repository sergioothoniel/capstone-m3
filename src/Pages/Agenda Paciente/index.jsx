import { Flex, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useSchedules } from '../../Providers/schedules';
import { BiArrowBack } from 'react-icons/bi';
import Lottie from 'react-lottie';
import animationData from '../../lotties/emptyAnimation.json';

function AgendaPaciente() {
  const history = useHistory();

  const { schedules } = useSchedules();

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
      {schedules.length === 0 ? (
        <Flex direction="column" height="100vh" pt='15px'>
          <Flex  marginLeft='15px'>
          <BiArrowBack
            size="30px"           
            cursor='pointer'
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
            <Text fontSize={["16px", "22px"]}>Você ainda não possui nenhuma consulta</Text>
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
        </Flex>
      )}
    </Flex>
  );
}

export default AgendaPaciente;
