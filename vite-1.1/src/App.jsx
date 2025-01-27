import React from 'react';

const App = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
