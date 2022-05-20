import { Flex } from '@chakra-ui/react';
import { usePsychologists } from '../../Providers/psychologists';
import { useState } from 'react';
import { HeaderDashboardPaciente, Header } from '../../components/Header';
import Button from '../../components/Button';
import Select from '../../components/Select';
import Input from '../../components/Input';
import { CardPsicologo } from '../../components/CardPsicologo';
import { useEffect } from 'react';

const DashboardPaciente = () => {
  const { psychologists } = usePsychologists();

  const [filteredPsychologist, setFilteredPsychologist] = useState([]);  

  const [inputValue, setInputValue] = useState('');

  const [approachValue, setApproachValue] = useState('');
  

  const handleChangeInput = event => setInputValue(event.target.value);

  const handleChangeApproach = event => setApproachValue(event.target.value);

  const findPsychologist = () => {
    const filterInput = psychologists.filter(({ name }) =>
      name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredPsychologist(filterInput);
  };

  const findSpecialization = () => {
    const filterInput = psychologists.filter((psico) =>
      psico.specializations.includes(approachValue)
    );
    setFilteredPsychologist(filterInput);
  }

  useEffect(()=>{
    setFilteredPsychologist(psychologists)
  }, [psychologists])

  useEffect(()=>{
    findSpecialization()
  }, [approachValue])

  const approach = [
    'Psicanálise',
    'Cognitivo comportamental',
    'Fenomenologia',
    'Junguiana',
    'Evolucionista',
  ];
 
  
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
              minWidth="290px"
              maxWidth="700px"
              width="90vw"
              border="1px"
              borderColor="primary.0"
              placeholder="Buscar profissionais pelo nome"
              alignSelf="center"
              value={inputValue}
              onChange={handleChangeInput}
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
              onClick={findPsychologist}
            >
              Buscar
            </Button>
          </Flex>
          <Flex
            maxWidth="700px"
            width="90%"
            justifyContent="space-between"
            alignSelf="center"
            mt='8px'
          >
            <Select
              height="50px"
              width={['140px', '400px', '300px']}
              maxWidth="600px"
              text="Abordagem"
              cursor='pointer'
              onChange={handleChangeApproach}
            >
              {approach.map(item => (
                <option key={item}>{item}</option>
              ))}
            </Select>            
          </Flex>          
        </Flex>
        {filteredPsychologist && filteredPsychologist.map(psychologist=>(
        <CardPsicologo key={psychologist.id} nome={psychologist.name}
        abordagens={typeof psychologist.specializations === 'string' ? [psychologist.specializations] : psychologist.specializations}
        review={!!psychologist.average ? psychologist.average : '5'}
        preco="R$50,00" formacao={["Harvard"]} descricao={!!psychologist.description ? psychologist.description : 'Psicólogo iniciante'}
        CRP={psychologist.crp}/>
      ))}
        
      </Flex>

      
      
    </>
  );
};

export default DashboardPaciente;
