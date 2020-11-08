import React from 'react';

import Header from './components/Header';
import Products from './components/Products';
import Cart from './components/Cart';

import './styles/normalize.css';
import './styles/font.css';
import './styles/base.css';
import { AppStateProvider } from './appState';

function App() {
  return (
    <AppStateProvider>
      <Header />
      <Products />
      <Cart />
    </AppStateProvider>
  );
}

export default App;
