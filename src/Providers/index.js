import { PatientsProvider } from './patients';
import { IsLoggedInProvider } from './isLoggedIn';
import { PsychologistsProvider } from './psychologists';
import { UserProvider } from './user';
import { DataUserProvider } from './dataUser';

const Provider = ({ children }) => {
  return (
    <IsLoggedInProvider>
      <DataUserProvider>
        <PatientsProvider>
          <UserProvider>
            <PsychologistsProvider>{children}</PsychologistsProvider>
          </UserProvider>
        </PatientsProvider>
      </DataUserProvider>
    </IsLoggedInProvider>
  );
};

export default Provider;
