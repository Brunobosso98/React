import React from 'react';

const App = () => {
  // console.log('executou fora');

  // React.useEffect(() => {
  //   console.log('executou');
  // }, []);

  // React.useEffect(() => {
  //   document.title = 'Total' + contar;
  // }, [contar]);

  const [contar, setContr] = React.useState(1);
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json));
  }, []);

  return (
    <>
      {dados && (
        <div>
          <h1>{dados.nome}</h1>
          <p>R$ {dados.preco * contar}</p>
        </div>
      )}
      <button onClick={() => setContr(contar + 1)}>{contar}</button>
    </>
  );
};

export default App;
