import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MovieContextProvider } from './context/movieContext';

ReactDOM.render(
  <React.StrictMode>
    <MovieContextProvider>
      <App />
    </MovieContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
