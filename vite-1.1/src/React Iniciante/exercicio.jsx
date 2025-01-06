// const titulo = <h1>Esse é um titulo</h1>;

// const App = () => {
//   const nome = 'Bruno';
//   const ativo = 0;

//   const carro = {
//     marca: 'Honda',
//     rodas: '4',
//   };

//   const estiloB = {
//     color: 'green',
//     fontSize: '2rem',
//   };
//   return (
//     <>
//       {titulo}
//       <p style={estiloB}>{new Date().getFullYear()}</p>
//       <p>{carro.marca}</p>
//       <p>{carro.rodas}</p>
//       <p className={ativo ? 'ativo' : 'inativo'}>{nome + ' 25 anos'}</p>
//     </>
//   );
// };

// Mostre os dados da aplicação, como aprensetado no vídeo
// Não utilize CSS externo, use o style para mudar as cores
// Se a situação estiver ativa pinte de verde, inativa vermelho
// Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </>
  );
};

export default App;
