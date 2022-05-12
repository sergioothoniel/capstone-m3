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
        height={'100%'}
        direction={'column'}
        justifyContent={'space-around'}
        alignItems={'center'}
      >
        <header></header>
        <Flex direction={'column'}>
          <label>Buscar profissionais</label>
          <Input width={'300px'} />
          <Button  fontSize={'16px'} width={'300px'} height={'40px'}>
            Buscar
          </Button>
          <Flex justifyContent={'space-around'}>
            <Select width={'140px'}>
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
        <footer>@2022 psique</footer>
      </Flex>
    </>
  );
};

export default DashboardPaciente;
