import React from 'react';
import { GlobalContext } from './GlobalContext.jsx';

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar</button>;
};

export default Limpar;
