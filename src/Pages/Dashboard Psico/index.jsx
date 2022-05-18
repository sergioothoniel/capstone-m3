import { Container } from './styles';
import { HeaderDashboardPsicologo } from '../../components/Header';
//import Celendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Calendar from '../../components/Calendar';

function DashboardPsico() {
  return (
    <Container>
      <HeaderDashboardPsicologo />
      <div className="faixaTitulo">
        <h1>Agenda de consultas</h1>
      </div>
      <div className='calendario'>
        <Calendar/>
      </div>
    </Container>
  );
}

export default DashboardPsico;
