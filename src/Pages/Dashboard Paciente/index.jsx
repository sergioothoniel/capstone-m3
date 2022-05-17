import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import { HeaderDashboardPaciente, Header } from '../../components/Header';

const DashboardPaciente = () => {
  const history = useHistory();

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
      <Flex height="100vh" direction="column" bg="white.300" maxWidth="100%">
        <Header>
          <HeaderDashboardPaciente />
        </Header>
        <Flex
          height="200px"
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          mt="20--px"
        >
          <Input
            width="85vw"
            color="gray.200"
            text="Buscar profissionais"
            border="1px solid"
            borderColor="primary.0"
          />
          <Button
            height="40px"
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
          <Flex width="90%" justifyContent="space-between" alignSelf="center">
            <Select placeholder="Abordagem" width="140px">
              {approach.map(item => (
                <option key={item}>{item}</option>
              ))}
            </Select>
            <Select placeholder="Valor" width={'140px'}>
              {price.map(item => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </Select>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardPaciente;
