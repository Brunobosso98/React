import React from 'react';

const App = () => {
  // const [comentarios, setComentarios] = React.useState([]);
  // const [input, setInput] = React.useState('');
  // const inputElement = React.useRef();

  // function handleClick() {
  //   setComentarios([...comentarios, input]);
  //   setInput('');
  //   inputElement.current.focus();
  // }

  const [carrinho, setCarrinho] = React.useState(0);
  const [notf, setNotf] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotf('Item adicionado ao carrinho');

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setNotf(null);
    }, 2000);
  }

  return (
    <>
      {/* <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button> */}

      <p>{notf}</p>
      <button onClick={handleClick}>Adicionar Carrinho {carrinho}</button>
    </>
  );
};

export default App;
