import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './pages/Main';

export default function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}
