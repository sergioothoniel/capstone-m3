import { Flex, Image, Text } from '@chakra-ui/react';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import { Header, HeaderContentHomePage } from '../../components/Header';
import background1HomePage from '../../Img/background1HomePage.png';

const HomePage = () => {
  const history = useHistory();

  const vaiParaRegistroPsico = () => {
    history.push('/cadastropsicologo');
  };

  const vaiParaRegistroPaciente = () => {
    history.push('/cadastropaciente');
  };

  return (
    <Flex
      direction="column"
      w="100vw"
      maxWidth="100%"
      overflowX="hidden"
      bg="white.200"
      align="center"
      justify="center"
    >
      <Header>
        <HeaderContentHomePage />
      </Header>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        bgImage={['', '', '', background1HomePage]}
        backgroundSize="cover"
        w="100vw"
        justify="center"
        align="center"
        pt={['', '', '', '100px']}
        bgPos="0% 40%"
        pb={['', '', '', '150px']}
      >
        <Image
          src={require('../../assets/sources/ImageHome1.svg').default}
          alt="Mulher sentada meditando"
          display={['none', 'none', 'none', 'block']}
          h="403px"
        />
        <Flex direction="column" align="flex-end">
          <Text
            fontWeight="500"
            fontSize={['22px', '28px', '30px']}
            lineHeight={['28px', '34px', '40px']}
            letterSpacing="0.14em"
            color="gray.300"
            width={['300px', '400px', '512px']}
            display="flex"
            align="center"
            textAlign="right"
            pt="65px"
            pb="105px"
          >
            Encare a jornada do autoconhecimento, e descubra-se através da
            terapia!
          </Text>
          <Image
            src={require('../../assets/sources/ImageHome1.svg').default}
            alt="Mulher sentada meditando"
            display={['block', 'block', 'block', 'none']}
          />
          <Text
            color="gray.200"
            textAlign="right"
            fontSize={['18px', '20px', '22px']}
            letterSpacing="0.1em"
            fontWeight="400"
            width={['300px', '370px', '437px']}
            lineHeight="28px"
            pt={['60px', '60px', '60px', '']}
          >
            Somos um ambiente de acolhimento e escuta, 100% online.
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        bg={['', '', '', 'secondary.300']}
        w="100vw"
        justify="center"
        align="center"
        height={['', '', '', '600px']}
      >
        <Flex direction="column">
          <Text
            width={['300px', '400px', '430px']}
            fontSize={['16px', '18px', '20px']}
            color="gray.300"
            letterSpacing="0.1em"
            fontWeight="400"
            lineHeight="28px"
            pt={['45px', '45px', '45px', '25px']}
            pb={['25px', '25px', '25px', '30px']}
          >
            Contamos com diversos profissionais, que possuem qualificações
            específicas para sua necessidade.
          </Text>
          <Image
            src={require('../../assets/sources/ImageHome2.svg').default}
            alt="Mulher sentada meditando"
            display={['block', 'block', 'block', 'none']}
          />
          <Text
            width={['300px', '400px', '430px']}
            fontSize={['16px', '18px', '20px']}
            fontWeight="400"
            letterSpacing="0.1em"
            lineHeight="28px"
            pt="35px"
            pb={['12px', '18px', '24px', '30px']}
          >
            Cadastre-se e inicie agora mesmo a sua jornada de autoconhecimento e
            desenvolvimento pessoal.
          </Text>
          <Flex justify={['center', 'center', 'center', '']}>
            <Button
              width={['320px', '320px', '414px']}
              height="48px"
              bg="secondary.0"
              fontWeigth="400"
              fontSize="18px"
              color="white.0"
              border="2px"
              borderColor="secondary.0"
              hoverBorder="secondary.100"
              onClick={vaiParaRegistroPaciente}
            >
              Quero me cadastrar
            </Button>
          </Flex>
        </Flex>
        <Image
          src={require('../../assets/sources/ImageHome3.svg').default}
          alt="Desenho de uma mulher com calendário atrás"
          display={['none', 'none', 'none', 'block']}
          h={['', '', '', '370px', '405px']}
          pl={['', '', '', '90px', '150px']}
        />
      </Flex>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        bg={['', '', '', 'primary.200']}
        w="100vw"
        justify="center"
        align="center"
        height={['', '', '', '600px']}
      >
        <Image
          src={require('../../assets/sources/ImageHome5.svg').default}
          alt="Duas pessoas conversando no telefone"
          display={['none', 'none', 'none', 'block']}
          h={['', '', '', '355px', '395px']}
          pr={['', '', '', '90px', '150px']}
        />
        <Flex direction="column" align={['', '', '', 'flex-end']}>
          <Text
            width={['300px', '400px', '410px']}
            fontSize={['16px', '18px', '20px']}
            fontWeight="400"
            letterSpacing="0.1em"
            lineHeight="28px"
            pt="35px"
            pb={['12px', '18px', '24px', '10px']}
            textAlign={['', '', '', 'right']}
          >
            Nosso objetivo é fornecer saúde através do tratamento psicoterápico,
            de maneira acessível, para todo o Brasil.
          </Text>
          <Image
            src={require('../../assets/sources/ImageHome4.svg').default}
            alt="Duas pessoas conversando no telefone"
            display={['block', 'block', 'block', 'none']}
          />
          <Text
            width={['300px', '320']}
            fontSize={['16px', '18px', '20px']}
            fontWeight="400"
            letterSpacing="0.1em"
            lineHeight="28px"
            pt={['35px', '35px', '35px', '30px']}
            pb={['12px', '18px', '24px', '30px']}
            textAlign={['', '', '', 'right']}
          >
            Trabalha na área da psicologia, e se identificou com nosso projeto?
          </Text>
          <Flex justify={['center', 'center', 'center', '']}>
            <Button
              width={['320px', '320px', '369px']}
              height="48px"
              bg="secondary.100"
              fontWeigth="400"
              fontSize="18px"
              color="white.0"
              border="2px"
              borderColor="secondary.100"
              hoverBorder="secondary.0"
              onClick={vaiParaRegistroPsico}
            >
              Faça parte da nossa equipe
            </Button>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction={['column', 'column', 'column', 'row']}
        w="100vw"
        justify="center"
        align="center"
        height={['700px', '', '', '600px']}
      >
        <Flex
          bg={['', '', '', 'white.300']}
          align="center"
          justify="center"
          pt={['50px']}
          h={['', '', '', '100%']}
          w={['', '', '', '40%']}
        >
          <Image
            src={require('../../assets/sources/ImageHome6.svg').default}
            alt="Homem com balão de conversa na mão e estrelas de avaliação dentro deste balão"
            h="315px"
          />
        </Flex>
        <Flex
          bg={['', '', '', 'secondary.300']}
          h={['450px', '', '', '100%']}
          direction="column"
          justify="space-around"
          align="center"
          w="60%"
        >
          <Text
            fontSize="14px"
            fontWeight="400"
            lineHeight="20px"
            color="white.0"
            w={['300px', '300px', '300px', '320px']}
            padding="8px"
            bg="primary.0"
            borderRadius="4px"
            h="max-content"
          >
            "Tive significativas melhoras no meu comportamento, sociabilidade e
            diminuição da ansiedade depois que comecei a fazer terapia pela
            plataforma da Psique"
          </Text>
          <Text
            fontSize="14px"
            fontWeight="400"
            lineHeight="20px"
            color="white.0"
            w={['300px', '300px', '300px', '320px']}
            padding="8px"
            bg="secondary.0"
            borderRadius="4px"
            h="max-content"
          >
            "Sou muito grata a equipe de psicólogos que me atendeu durante
            minhas consultas na plataforma, todos eram muito atenciosos e
            preocupados com minha saúde mental."
          </Text>
          <Text
            fontSize="14px"
            fontWeight="400"
            lineHeight="20px"
            color="white.0"
            w={['300px', '300px', '300px', '320px']}
            padding="8px"
            bg="primary.0"
            borderRadius="4px"
            h="max-content"
          >
            "Eu consultei com o Dr. Hannibal Lecter, apesar de algumas vezes
            mencionar quão nutritiva pode ser a carne humana, me pareceu
            bastante atencioso e preocupado com meu bem-estar."
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HomePage;
