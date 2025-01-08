import React from 'react';
import Produto from './Hooks/useEffect1/Produto';

const App = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <>
      {ativo && <Produto />}
      <button onClick={() => setAtivo(!ativo)}>Ativar</button>
    </>
  );
};

export default App;
