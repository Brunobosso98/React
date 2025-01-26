import React from 'react';
import useFetch from './Hooks/customHooks2/useFetch';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div>
        <p>Produto Preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((produto) => (
          <li key={produto.id}>{produto.nome}</li>
        ))}
      </div>
    );
  else return null;
};

export default App;
