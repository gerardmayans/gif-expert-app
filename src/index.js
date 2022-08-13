import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/site.css';


import {ShinDoApp as ShinDoApp} from './components/ShinDoApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShinDoApp />
  </React.StrictMode>
);