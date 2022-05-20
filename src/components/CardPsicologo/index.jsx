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
import Button from '../Button';
import Calendar from '../Calendar';

export const CardPsicologo = ({
  nome,
  abordagens,
  review,
  preco,
  formacao,
  descricao,
  CRP,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const reviewCard = () => {
    const arr = [];

    for (let i = 0; i < 5; i++) {
      if (i < review) {
        arr.push(1);
      } else {
        arr.push(0);
      }
    }
    return arr;
  };

  return (
    <Flex
      w={['318px', '318px', '740px']}
      h={['230px', '230px', '320px']}
      borderRadius="10px"
      border="1px"
      borderColor="primary.0"
      px={['15px', '15px', '35px']}
      my="20px"
    >
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent borderRadius="0px" bg="white.300">
          <ModalHeader display="flex" align="center">
            <ModalCloseButton w="max-content" position="relative" top="0px">
              <Image
                src={require('../../Img/Arrow.svg').default}
                alt="Ícone de seta apontado para esquerda"
                cursor="pointer"
                w={['30px', '30px', '50px']}
              />
            </ModalCloseButton>
          </ModalHeader>
          <ModalBody>
            <Flex
              direction="column"
              align="center"
              justify="space-between"
              h="max-content"
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
                fontWeight="500"
                fontSize={['15px', '15px', '20px']}
                color="gray.300"
              >
                Dr(a).{nome}
              </Text>
              <Flex direction="column" maxHeight="100px">
                {abordagens.map((item, index) => {
                  return (
                    <Text
                      fontWeight="400"
                      fontSize={['12px', '12px', '16px']}
                      color="gray.300"
                      key={index}
                    >
                      {item}
                    </Text>
                  );
                })}
              </Flex>
              <Flex direction="row">
                {reviewCard().map((item, index) => {
                  return item === 1 ? (
                    <AiFillStar fontSize="16px" color="#FFCE31" key={index} />
                  ) : (
                    <AiOutlineStar
                      fontSize="16px"
                      color="#FFCE31"
                      key={index}
                    />
                  );
                })}
              </Flex>
              <Text fontWeight="400" fontSize="16px" color="gray.300">
                {preco.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </Text>
              <Flex direction="column" align="center">
                {formacao.map((item, index) => {
                  return (
                    <Text
                      fontWeight="300"
                      fontSize="14px"
                      color="gray.300"
                      key={index}
                    >
                      {item}
                    </Text>
                  );
                })}
              </Flex>
              <Flex maxWidth="600px">
                <Text
                  fontWeight="300"
                  fontSize="15px"
                  color="gray.300"
                  pb="20px"
                >
                  {descricao}
                </Text>
              </Flex>
              <Flex>
                <Calendar idPsico="7" isPatient />
              </Flex>
            </Flex>
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
          {abordagens.map((item, index) => {
            return (
              <Text
                fontWeight="300"
                fontSize="12px"
                color="gray.300"
                display={['block', 'block', 'none']}
                key={index}
                maxWidth="100px"
              >
                {item}
              </Text>
            );
          })}
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
                Dr(a).{nome}
              </Text>

              <Flex direction="row">
                {reviewCard().map((item, index) => {
                  return item === 1 ? (
                    <AiFillStar fontSize="16px" color="#FFCE31" key={index} />
                  ) : (
                    <AiOutlineStar
                      fontSize="16px"
                      color="#FFCE31"
                      key={index}
                    />
                  );
                })}
              </Flex>
              <Text fontWeight="300" fontSize="15px" color="gray.300">
                {CRP}
              </Text>
              <Text
                fontWeight="300"
                fontSize="13px"
                color="gray.300"
                display={['block', 'block', 'none']}
              >
                {descricao.length > 50
                  ? descricao.slice(0, 50) + '...'
                  : descricao}
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
              {descricao.length > 50
                ? descricao.slice(0, 50) + '...'
                : descricao}
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
