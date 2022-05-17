import { Switch, Route } from 'react-router-dom';
import AgendaPaciente from '../Pages/Agenda Paciente';
import AgendaPsico from '../Pages/Agenda Psico';
import CadastroPaciente from '../Pages/CadastroPaciente';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import CadastroPsico from '../Pages/CadastroPsico';
import DashboardPaciente from '../Pages/Dashboard Paciente';
import DashboardPsico from '../Pages/Dashboard Psico';

const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
      <HomePage />
      </Route>
      <Route exact path="/login">
        <LoginPage />
      </Route>
      <Route exact path="/agendapaciente">
        <AgendaPaciente />
      </Route>
      <Route exact path="/agendapsicologo">
        <AgendaPsico />
      </Route>
      <Route exact path="/cadastropaciente">
        <CadastroPaciente />
      </Route>
      <Route exact path="/cadastropsicologo">
        <CadastroPsico />
      </Route>
      <Route exact path="/dashboardpaciente">
        <DashboardPaciente />
      </Route>
      <Route exact path="/dashboardpsico">
        <DashboardPsico />
      </Route>
    </Switch>
  );
};

export default Routers;
