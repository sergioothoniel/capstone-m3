import { PatientsProvider } from "./patients";

const Provider = ({ children }) => {
  return <PatientsProvider>{children}</PatientsProvider>;
};

export default Provider;
