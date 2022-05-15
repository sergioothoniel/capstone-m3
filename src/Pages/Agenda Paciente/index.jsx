import { Flex } from '@chakra-ui/react';
import { useSchedules } from '../../Providers/schedules';
import Lottie from 'react-lottie';
import animationData from '../../lotties/emptyAnimation.json';

function AgendaPaciente() {
  const { schedules } = useSchedules();

  console.log(schedules)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Flex>
      {/* {schedules === [] ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <Flex>
          <h1>oie</h1>
        </Flex>
      )} */}
    </Flex>
  );
}

export default AgendaPaciente;
