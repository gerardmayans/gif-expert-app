import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/site.css';
import "./styles/fonts.css"
import {GifExpertApp} from './components/GifExpertApp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GifExpertApp />
  </React.StrictMode>
);