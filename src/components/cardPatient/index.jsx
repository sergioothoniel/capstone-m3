import { Container } from './styles';

const CardPatient = ({ img, name, date, time }) => {
  return (
    <Container>
      <div className="card">
        <img src={require('../../assets/imagens/Avatar.svg').default} alt={name} />
        <div className="card_right_side">
          <span>{name}</span>
          <span>{date}</span>
          <span>{time}</span>
          <button>Ver mais</button>
        </div>
      </div>
    </Container>
  );
};

export default CardPatient;
