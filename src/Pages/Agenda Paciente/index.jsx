import { Flex } from '@chakra-ui/react';
import { useSchedules } from '../../Providers/schedules';
import Lottie from 'react-lottie';
import animationData from '../../lotties/emptyAnimation.json';

function AgendaPaciente() {
  const { schedules } = useSchedules();

  console.log(schedules);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Flex
  direction='column'
  alignItems='center'>
      {schedules.length === 0 ? (
        <Flex
        direction='column'
        alignItems='center
        '>
          <h2>Você ainda não possui consultas</h2>
          <Lottie options={defaultOptions} height={300} width={300} />
        </Flex>
      ) : (
        <Flex>
          <h1>oie</h1>
        </Flex>
      )}
    </Flex>
  );
}

export default AgendaPaciente;
