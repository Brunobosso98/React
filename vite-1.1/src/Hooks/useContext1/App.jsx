import React from 'react';
import Produto from './Hooks/useContext1/Produto.jsx';
import { GlobalStorage } from './Hooks/useContext1/GlobalContext.jsx';

const App = () => {
  return (
    <GlobalStorage>
      {' '}
      <Produto />
    </GlobalStorage>
  );
};

export default App;
