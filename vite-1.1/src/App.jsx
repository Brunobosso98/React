// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)
const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const { pathname } = window.location;

import Lista from './Desafio/Lista.jsx';
import Titulo from './Desafio/Titulo.jsx';
import Descricao from './Desafio/Descricao.jsx';

const App = () => {
  return (
    <div>
      <Lista />
      <Titulo />
      <Descricao />
    </div>
  );
};

export default App;
