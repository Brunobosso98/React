import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

const App = () => {
  // const [ativo, setAtivo] = React.useState(false);
  // const [dados, setDados] = React.useState({ nome: 'Andre', idade: '30' });

  // function handleClick() {
  //   setAtivo(!ativo);
  //   setDados({ ...dados, faculdade: 'Possui Facul' });
  // }
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
      {/* <p>{dados.nome}</p>
      <p>{dados.idade}</p> <p>{dados.faculdade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button> */}
    </>
  );
};
export default App;
