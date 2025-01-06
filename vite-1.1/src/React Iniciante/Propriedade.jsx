// const Titulo = ({ cor, texto, children }) => {
//   return (
//     <h1 style={{ color: cor }}>
//       {texto}, {children}
//     </h1>
//   );
// };

import Propriedades from '../Propriedades/Form.jsx';

// const App = () => {
//   return (
//     <>
//       <Titulo cor="red" texto="Meu titulo 1">
//         Isso é o children
//         <p>Teste</p>
//       </Titulo>
//       <Titulo cor="blue" texto="Meu titulo 2" />
//     </>
//   );
// };

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from '../Form/Form.jsx';

const Teste = () => {
  const active = true;
  if (active) {
    return <p>Teste</p>;
  } else {
    return null;
  }
};

const App = () => {
  return (
    <>
      <Propriedades />
    </>
  );
};
export default App;
