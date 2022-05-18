import { Flex, Image, Text, useDisclosure } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaCalendarCheck } from 'react-icons/fa';
import Button from '../Button';

export const CardPsicologo = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex
      w={['318px', '318px', '740px']}
      h={['212px', '212px', '320px']}
      borderRadius="10px"
      border="1px"
      borderColor="primary.0"
      px={['15px', '15px', '35px']}
    >
      {/* falta concluir estilização e conteúdo do modal */}
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Setinha</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Oi</Text>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex direction="row">
        <Flex
          direction={['column', 'column', 'row']}
          justify="space-between"
          flexWrap="wrap"
          pt={['15px', '15px', '35px']}
          pb={['15px', '15px', '35px']}
        >
          <Image
            src={require('../../Img/Avatar.svg').default}
            alt="Logo escrito psiqué"
            cursor="pointer"
            borderRadius="100px"
            w={['93px', '93px', '120px']}
            h={['93px', '93px', '120px']}
          />
          <Text
            fontWeight="400"
            fontSize="16px"
            color="gray.300"
            display={['block', 'block', 'none']}
          >
            Abordagens
          </Text>
          <Text
            fontWeight="300"
            fontSize="12px"
            color="gray.300"
            display={['block', 'block', 'none']}
          >
            Abordagens aqui
          </Text>
          <Text
            fontWeight="300"
            fontSize="12px"
            color="gray.300"
            display={['block', 'block', 'none']}
          >
            Abordagens aqui
          </Text>
          <Text
            fontWeight="300"
            fontSize="12px"
            color="gray.300"
            display={['block', 'block', 'none']}
          >
            Abordagens aqui
          </Text>
          <Flex
            direction={['column', 'column', 'row']}
            w={['162px', '162px', '500px']}
            h={['100%', '100%', '130px']}
            justify="space-between"
            ml="30px"
          >
            <Flex
              direction="column"
              h={['80%', '80%', '70%']}
              justify="space-around"
            >
              <Text fontWeight="500" fontSize="15px" color="gray.300">
                Dr. José Ferreira
              </Text>
              {/* nas estrelas, fazer loop no reviews para renderizar de acordo com a nota, se indice do elemento atual for menor que a nota, 
            renderiza o AiFillStar, se não, renderiza AiOutlineStar */}
              <Flex direction="row">
                <AiFillStar fontSize="16px" color="#FFCE31" />
                <AiFillStar fontSize="16px" color="#FFCE31" />
                <AiFillStar fontSize="16px" color="#FFCE31" />
                <AiFillStar fontSize="16px" color="#FFCE31" />
                <AiOutlineStar fontSize="16px" color="#FFCE31" />
              </Flex>
              <Text fontWeight="300" fontSize="15px" color="gray.300">
                ESTADO / CRP
              </Text>
              <Text
                fontWeight="300"
                fontSize="13px"
                color="gray.300"
                display={['block', 'block', 'none']}
              >
                Possui mais de 15 anos de experiência atendendo pacientes...
              </Text>
            </Flex>
            <Flex display={['flex', 'flex', 'none']}>
              <Button
                width="162px"
                height="25px"
                bg="secondary.200"
                borderColor="secondary.200"
                border="2px"
                hoverBorder="secondary.100"
                color="white.0"
                fontSize="13px"
                onClick={() => onOpen()}
              >
                Marcar consulta
              </Button>
            </Flex>
            <Image
              src={require('../../Img/CheckCalendar.svg').default}
              alt="Botão de cadastro de nova consulta em forma de calendário cor laranja"
              cursor="pointer"
              h="50px"
              display={['none', 'none', 'block']}
              onClick={() => onOpen()}
            />
          </Flex>
          <Flex display={['none', 'none', 'flex']}>
            {/* descriçao desktop aqui */}
            <Text fontWeight="400" fontSize="20px" color="gray.300">
              Possui mais de 15 anos de experiência atendendo pacientes...
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
