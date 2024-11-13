import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { MessageProvider } from './Context/MessagesContext.js';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MessageProvider>
      <App />
    </MessageProvider>
  </StrictMode>
);
