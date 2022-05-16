import { Flex, FormLabel, useDisclosure } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const DashboardPaciente = () => {
  const history = useHistory();

  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="white.300" width="230px" height="300px">
          <ModalCloseButton
            color="secondary.0"
            outline="none"
            borderStyle="none"
          />
          <ModalBody>
            <Flex
              height="90%"
              mt="20px"
              direction="column"
              justifyContent="space-around"
              alignItems="center"
            >
              <Flex
                height="50%"
                direction="column"
                justifyContent="space-around"
                alignItems="center"
              >
                <Button
                  height="48px"
                  width="170px"
                  bg="secondary.100"
                  color="white.100"
                  onClickFunction={() => history.push('/agendapaciente')}
                >
                  Minhas consultas
                </Button>
                <Button
                  height="48px"
                  width="170px"
                  bg="secondary.100"
                  color="white.100"
                >
                  Configurações
                </Button>
              </Flex>
              <Button
                height="48px"
                width="170px"
                bg="secondary.0"
                color="white.100"
                onClickFunction={() => history.push('/')}
              >
                Sair
              </Button>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex height="100vh" direction="column" bg="white.300" maxWidth="100%">
        <Flex
          height="200px"
          direction="column"
          justifyContent="space-around"
          alignItems="center"
        >
          <FormLabel alignSelf="flex-start" ml="10px">
            Buscar profissionais
          </FormLabel>
          <Input width="300px" />
          <Button
            height="40px"
            width="300px"
            bg="secondary.100"
            color="white.100"
            fontSize="18px"
            fontWeigth="500"
            onClickFunction={onOpen}
          >
            Buscar
          </Button>
          <Flex justifyContent="space-around" alignSelf="normal">
            <Select placeholder="Abordagem" width="140px">
              {approach.map(item => (
                <option key={item}>{item}</option>
              ))}
            </Select>
            <Select placeholder="Valor" width={'140px'}>
              {price.map(item => (
                <option value={item} key={item}>{item}</option>
              ))}
            </Select>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default DashboardPaciente;
