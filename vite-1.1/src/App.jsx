import React from 'react';
import Checkbox from './Hooks/Checkbox/Checkbox.jsx';

const App = () => {
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);
  if (termos.length > 0) {
    console.log('enviar');
  }

  return (
    <form>
      <h2>Termos</h2>
      <Checkbox
        options={['Li e aceito os termos']}
        value={termos}
        setValue={setTermos}
      />
      <h2>Checkbox</h2>
      <Checkbox
        options={['JavaScript', 'Python', 'Ruby']}
        value={linguagens}
        setValue={setLinguagens}
      />
    </form>
  );
};

export default App;
