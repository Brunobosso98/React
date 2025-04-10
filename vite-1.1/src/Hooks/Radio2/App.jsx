import React from 'react';
import Radio from './Hooks/Radio2/Radio';

const App = () => {
  const [cor, setCor] = React.useState('Vermelho');
  const [fruta, setFruta] = React.useState('');

  return (
    <form>
      <h2>Corzada</h2>
      <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
      <h2>Frutada</h2>
      <Radio options={['Mexerica', 'Maça']} value={fruta} setValue={setFruta} />
    </form>
  );
};

export default App;
