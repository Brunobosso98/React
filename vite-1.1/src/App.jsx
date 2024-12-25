const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const nome = 'Bruno';
  const ativo = 0;

  const carro = {
    marca: 'Honda',
    rodas: '4',
  };

  const estiloB = {
    color: 'green',
    fontSize: '2rem',
  };
  return (
    <>
      {titulo}
      <p style={estiloB}>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{nome + ' 25 anos'}</p>
    </>
  );
};

export default App;
