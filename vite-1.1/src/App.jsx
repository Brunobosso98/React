// Replique a interface como a apresentada na aula
// Utilize a array abaixo para mostrar os produtos
// Quebre em componentes o que precisar ser reutilizado
// Dica: const { pathname } = window.location; (puxa o caminho do URL)

import Lista from './Desafio/Lista.jsx';
import Home from './Desafio/Home.jsx';
import Produtos from './Desafio/Produtos.jsx';

import React from 'react';
const Href = () => {
  const { pathname } = window.location;
  const isProdutosPage = pathname.includes('produtos');
  return (
    <div>
      {isProdutosPage && (
        <>
          <Produtos />
        </>
      )}
      {!isProdutosPage && (
        <>
          <Home />
        </>
      )}
    </div>
  );
};
const App = () => {
  return (
    <div>
      <Lista />
      <Href />
    </div>
  );
};
export default App;
