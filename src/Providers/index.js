import { PatientsProvider } from './patients';
import { IsLoggedInProvider } from './isLoggedIn';
import { PsychologistsProvider } from './psychologists';
import { UserProvider } from './user';

const Provider = ({ children }) => {
  return (
    <IsLoggedInProvider>
      <UserProvider>
        <PsychologistsProvider>
          <PatientsProvider>{children}</PatientsProvider>
        </PsychologistsProvider>
      </UserProvider>
    </IsLoggedInProvider>
  );
};

export default Provider;
