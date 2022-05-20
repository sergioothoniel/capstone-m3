import { Container } from './styles';
import { HeaderDashboardPsicologo, Header } from '../../components/Header';
import 'react-calendar/dist/Calendar.css';
import Calendar from '../../components/Calendar';
import { useDataUser } from '../../Providers/dataUser';

const DashboardPsico = () => {
  const { dataUser } = useDataUser();

  return (
    <Container>
      <Header>
        <HeaderDashboardPsicologo />
      </Header>
      <div className="faixaTitulo">
        <h1>Agenda de consultas</h1>
      </div>
      <div className="calendario">
        <Calendar idPsico={dataUser.id} />
      </div>
    </Container>
  );
};

export default DashboardPsico;
