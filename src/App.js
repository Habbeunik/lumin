import React, { Fragment } from 'react';
import Header from './components/Header';
import Products from './components/Products';

import './styles/normalize.css';
import './styles/font.css';
import './styles/base.css';

function App() {
  return (
    <Fragment>
      <Header />
      <Products />
    </Fragment>
  );
}

export default App;
