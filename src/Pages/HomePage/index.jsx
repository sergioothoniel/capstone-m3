import { Flex, Image, Text } from '@chakra-ui/react';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

function HomePage() {
  const history = useHistory();

  const vaiParaRegistroPsico = () => {
    history.push('/cadastropsicologo');
  };

  return (
    <Flex
      direction="column"
      w="100vw"
      maxWidth="100%"
      overflowX="hidden"
      bg="white.300"
      align="center"
      justify="center"
    >
      <Text
        fontWeight="500"
        fontSize={['22px', '28px', '34px', '40px']}
        lineHeight={['28px', '34px', '40px', '46px']}
        letterSpacing="0.14em"
        color="gray.300"
        width={['300px', '400px', '600px', '860px']}
        display="flex"
        align="center"
        textAlign={['right', 'right', 'left', 'left']}
        pt="65px"
        pb={['28px', '34px', '40px', '35px']}
      >
        Encare a jornada do autoconhecimento, e
      </Text>
      <Text
        fontWeight="500"
        fontSize={['22px', '28px', '34px', '40px']}
        lineHeight={['28px', '34px', '40px', '46px']}
        letterSpacing="0.14em"
        color="gray.300"
        width={['300px', '400px', '600px', '860px']}
        display="flex"
        align="center"
        textAlign={['right', 'right', 'left', 'left']}
        pb="105px"
      >
        descubra-se através da terapia!
      </Text>
      <Image
        src={require('../../sources/ImageHome1.svg').default}
        alt="Mulher sentada meditando"
      />
      <Text
        width={['300px', '400px', '600px', '860px']}
        fontSize={['16px', '22px', '28px', '34px']}
        color="gray.300"
        letterSpacing="0.1em"
        fontWeight="400"
        lineHeight={['28px', '40px', '52px']}
        pt="45px"
        pb={['12px', '18px', '24px', '30px']}
      >
        Nosso objetivo é fornecer saúde através do tratamento psicoterápico, de
        maneira acessível, para todo o Brasil.
      </Text>
      <Image
        src={require('../../sources/ImageHome2.svg').default}
        alt="Pessoas conversando no telefone"
      />
      <Text
        width={['290px', '400px', '600px', '860px']}
        fontSize={['16px', '22px', '28px', '34px']}
        fontWeight="400"
        letterSpacing="0.1em"
        lineHeight={['28px', '40px', '52px']}
        pt="35px"
        pb={['12px', '18px', '24px', '30px']}
      >
        Trabalha na área da psicologia, e se identificou com nosso projeto?
      </Text>
      <Button
        width="320px"
        height="48px"
        bg="secondary.0"
        fontWeigth="600"
        fontSize="18px"
        color="white.0"
        border="2px"
        borderColor="secondary.0"
        hoverBorder="secondary.100"
        onClickFunction={vaiParaRegistroPsico}
      >
        Faça parte da nossa equipe
      </Button>
      <Text
        width={['300px', '400px', '600px', '860px']}
        fontSize={['16px', '22px', '28px', '34px']}
        color="gray.300"
        letterSpacing="0.1em"
        fontWeight="400"
        lineHeight={['28px', '40px', '52px']}
        pt="35px"
        pb="55px"
      >
        Todo dia e a qualquer hora, nossos especialistas estarão disponíveis
        para atendimento. Basta cadastrar-se, e agendar sua consulta.
      </Text>
      <Image
        src={require('../../sources/ImageHome3.svg').default}
        alt="Pessoas conversando no telefone"
        marginBottom="100px"
      />
    </Flex>
  );
}

export default HomePage;
