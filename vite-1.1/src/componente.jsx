// const App = () => {
//   const produtos = ['notebook ', 'tablet ', 'iphone'];
//   return (
//     <>
//       <ul>
//         {produtos.map((produto) => (
//           <li key={produto}>{produto}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Form from './Form/Form.jsx';

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
      <div>
        <Teste />
        <Header />
        <Form />
        <Footer />
      </div>
    </>
  );
};

export default App;
