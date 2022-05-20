import { ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';
import Provider from './Providers';
import { createRoot } from 'react-dom/client'

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

