import { Flex } from '@chakra-ui/react';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';

const DashboardPaciente = () => {
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

        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <header></header>
        <Flex
         height="200px"
         direction="column"
         justifyContent='space-around'                  
         >
          <label color="gray.700" >Buscar profissionais</label>
          <Input width="300px" />
          <Button
            width="300px"
            height="40px"
            fontSize="18px"
            bg="secondary.100"
            color="white.100"
            fontWeigth="500"
          >
            Buscar
          </Button>
          <Flex justifyContent="space-around">
            <Select width="140px">
              {approach.map(item => (
                <option>{item}</option>
              ))}
            </Select>
            <Select width={'140px'}>
              {price.map(item => (
                <option>{item}</option>
              ))}
            </Select>
          </Flex>
        </Flex>
      </Flex>
      <footer>@2022 psique</footer>
    </>
  );
};

export default DashboardPaciente;
