import React from 'react';
import Titulo from './Titulo';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Produtos = () => {
  return (
    <section>
      <Titulo texto="Produtos" />
      {produtos.map((produto) => (
        <div
          key={produto.nome}
          style={{
            border: '1px solid',
            marginBottom: '12px',
          }}
        >
          <p key={produto.nome} style={{ marginLeft: '15px' }}>
            {produto.nome}
          </p>
          <ul>
            {produto.propriedades.map((prop) => (
              <li style={{ marginLeft: '15px' }}>{prop}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Produtos;
