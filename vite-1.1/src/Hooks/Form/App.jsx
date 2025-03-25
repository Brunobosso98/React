import React from 'react';
import Input from './Hooks/Form/input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
    </form>
  );
};

export default App;
