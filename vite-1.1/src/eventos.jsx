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

export default App;
