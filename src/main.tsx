import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './routes';
import Theme from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <Router />
    </Theme>
  </React.StrictMode>,
);
