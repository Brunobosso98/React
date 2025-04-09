import React from 'react';
import Select from './Hooks/Select2/select';

const [produto, setProduto] = React.useState('');

const App = () => {
  return (
    <form>
      <Select
        options={['smartphone', 'tablet']}
        value={produto}
        setValue={setProduto}
      />
    </form>
  );
};

export default App;
