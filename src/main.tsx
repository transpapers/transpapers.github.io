import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const app = document.getElementById('app');

if (app !== null) {
  ReactDOM.createRoot(app).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}
