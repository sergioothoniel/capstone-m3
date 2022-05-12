import { PatientsProvider } from './patients';
import { IsLoggedInProvider } from './isLoggedIn';
import { PsychologistsProvider } from './psychologists';
import { UsersProvider } from './users';

const Provider = ({ children }) => {
  return (
    <IsLoggedInProvider>
      <UsersProvider>
        <PsychologistsProvider>
          <PatientsProvider>{children}</PatientsProvider>
        </PsychologistsProvider>
      </UsersProvider>
    </IsLoggedInProvider>
  );
};

export default Provider;
