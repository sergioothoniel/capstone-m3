import { Flex, FormLabel, useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { usePsychologists } from '../../Providers/psychologists';

import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import { HeaderDashboardPaciente, Header } from '../../components/Header';

const DashboardPaciente = () => {
  const history = useHistory();

  const { psychologists } = usePsychologists();

  const approach = [
    'Psicanálise',
    'Cognitivo comportamental',
    'Fenomenologia',
    'Junguiana',
    'Evolucionista',
  ];

  const price = ['R$60', 'R$100', 'R$150'];

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
          <HeaderDashboardPaciente />
        </Header>
        <Flex
          height="200px"
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          mt="20px"
        >
          <Flex
            width="100%"
            height="130px"
            direction="column"
            justifyContent="space-around"
            alignItems="center"
          >
            <Input
              height="50px"
              maxWidth="700px"
              width="90%"
              border="1px"
              borderColor="primary.0"
              placeholder="Buscar profissionais"
              alignSelf="center"
            />
            <Button
              height="50px"
              maxWidth="700px"
              width="90%"
              border="2px"
              borderColor="secondary.100"
              hoverBorder="secondary.0"
              bg="secondary.100"
              color="white.100"
              fontSize="18px"
              fontWeigth="500"
            >
              Buscar
            </Button>
          </Flex>
          <Flex
            maxWidth="700px"
            width="90%"
            justifyContent="space-between"
            alignSelf="center"
          >
            <Select
              height="50px"
              width={['140px', '400px', '300px']}
              maxWidth="600px"
              placeholder="Abordagem"
            >
              {approach.map(item => (
                <option key={item}>{item}</option>
              ))}
            </Select>
            <Select
              height="50px"
              width={['140px', '400px', '300px']}
              maxWidth="600px"
              placeholder="Valor"
            >
              {price.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Flex>
          <ul>
            {psychologists.map(item => (
              <li>{item}</li>
            ))}
          </ul>
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardPaciente;
