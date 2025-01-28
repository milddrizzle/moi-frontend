import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css'
import RequestProvider from './context/request_context';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
  <React.StrictMode>
    <RequestProvider>
      <App />
    </RequestProvider>
   </React.StrictMode>
);
