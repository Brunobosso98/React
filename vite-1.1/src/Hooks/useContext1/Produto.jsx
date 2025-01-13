import React from 'react';
import { GlobalContext } from './GlobalContext.jsx';

const Produto = () => {
  // const dados = React.useContext(UserContext);

  // return <div>{dados.nome}</div>;
  const global = React.useContext(GlobalContext);

  return (
    <div>
      Produto: {global.contar}{' '}
      <button onClick={() => global.adicionarDois()}>Adicionar</button>{' '}
    </div>
  );
};

export default Produto;
