import React from 'react';
import ReactDOM from 'react-dom/client';
import PokeTable from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PokeTable />
  </React.StrictMode>
);

