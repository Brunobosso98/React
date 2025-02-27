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

const App = () => {
  const livros = [
    { nome: 'A Agua de Bruno', ano: 1995 },
    { nome: 'A Torneira Feia do Hotel', ano: 2000 },
    { nome: 'The Devil with Black Eyes', ano: 2015 },
  ];
  return (
    <>
      <ul>
        {livros
          .filter((livro) => livro.ano >= 2000)
          .map((livro) => (
            <li key={livro.nome}>
              {livro.nome}, {livro.ano}
            </li>
          ))}
      </ul>
    </>
  );
};

export default App1;

const App1 = () => {
  function handleClick(event) {
    console.log(event);
  }
  window.addEventListener('scroll', handleScroll);
  return (
    <>
      <button onClick={handleClick}>Clique aqui</button>
      <button onClick={(event) => alert(event.target.innerText)}>
        Clica pai
      </button>
    </>
  );
};
