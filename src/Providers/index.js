import { PatientsProvider } from './patients';
import { IsLoggedInProvider } from './isLoggedIn';
import { PsychologistsProvider } from './psychologists';
import { UserProvider } from './user';
import { SchedulesProvider } from './schedules';
import { DataUserProvider } from './dataUser';

const Provider = ({ children }) => {
  return (
    <IsLoggedInProvider>
      <DataUserProvider>
        <PatientsProvider>
          <SchedulesProvider>
            <UserProvider>
              <PsychologistsProvider>{children}</PsychologistsProvider>
            </UserProvider>
          </SchedulesProvider>
        </PatientsProvider>
      </DataUserProvider>
    </IsLoggedInProvider>
  );
};

export default Provider;
