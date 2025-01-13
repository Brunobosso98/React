import React from 'react';
import Produto from './Produto.jsx';
import { GlobalStorage } from './GlobalContext.jsx';

const App = () => {
  return (
    <GlobalStorage>
      {' '}
      <Produto />
    </GlobalStorage>
  );
};

export default App;
