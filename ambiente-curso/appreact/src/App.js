import React from 'react';

const titulo = <h1>Esse é um titulo</h1>;

const App = () => {
  const random = Math.random();
  const ativo = false;

  function mostrarNome() {
    return 'Lucas';
  }

  const carro = {
    marca: 'Ford',
    rodas: '4',
  };

  return (
    <>
      {titulo}
      <p>{mostrarNome()}</p>
      <p>{new Date().getFullYear()}</p>
      <p>{carro.marca}</p>
      <p>{carro.rodas}</p>
      <p className={ativo ? 'ativo' : 'inativo'}>{(random * 1000) / 50}</p>
    </>
  );
};

export default App;
