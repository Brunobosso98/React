import React from 'react';

const Teste = () => {
  return (
    <div>
      <h1>Ola</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <a href="https://origamid.com">Origamid</a>;
      <Teste />;
    </div>
  );
};

const Comprar = () => {
  const [contador, setContador] = React.useState(1);
  return (
    <div>
      <p>Total: {contador}</p>
      <p>Preco: R$ {contador * 25}</p>
      <button onClick={() => setContador(contador + 1)}>Comprar</button>
    </div>
  );
};

export default Comprar;
