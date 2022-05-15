import { PatientsProvider } from './patients';
import { IsLoggedInProvider } from './isLoggedIn';
import { PsychologistsProvider } from './psychologists';
import { UserProvider } from './user';
import { DataUserProvider } from './dataUser';

const Provider = ({ children }) => {
  return (
    <IsLoggedInProvider>
      <DataUserProvider>
        <UserProvider>
          <PsychologistsProvider>
           {children}
          </PsychologistsProvider>
        </UserProvider>
      </DataUserProvider>
    </IsLoggedInProvider>
  );
};

export default Provider;
