import { Flex } from '@chakra-ui/react';
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
    <Flex direction='column' alignItems='center'>
      {schedules.length === 0 ? (
        <Flex
          direction='column'
          alignItems='center
        '
        >
          <h2>Você ainda não possui consultas</h2>
          <Lottie options={defaultOptions} height={300} width={300} />
        </Flex>
      ) : (
        <Flex direction='column'>
          <BiArrowBack
            height='20px'
            onClick={() => history.push('/dashboardPaciente')}
          />
          <Flex
            height='70px'
            width='100vw'
            mt='15px'
            justifyContent='center'
            alignItems='center'
            bg='primary.100'
            color='white.200'
            fontSize='22px'
            fontWeight='600'
          >
            <h2>Histórico de consultas</h2>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
}

export default AgendaPaciente;
