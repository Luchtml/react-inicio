import React from 'react';

const lucas = {
  cliente: 'Lucas',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};
const thamires = {
  cliente: 'Thamires',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const App = () => {
  const dados = thamires;
  const { compras } = dados;
  const precos = compras.map((compra) => {
    return compra.preco.replace('R$ ', '');
  });

  const precosTotal = precos.map((item) => {
    return parseInt(item, 10)
  })

  const total = precosTotal.reduce((acc, preco) => {
    return acc + preco;
  });


  return (
    <div>
      <p>
        <strong>Nome: </strong>
        {dados.cliente}
      </p>
      <p>
        <strong>Idade: </strong>
        {dados.idade}
      </p>
      <p>
        <strong>Situação: </strong>
        <span style={{color: dados.ativa ? "green" : "red"}}>{dados.ativa ? 'Ativa' : 'Inativa'}</span>
      </p>
      <p>
        <strong>Total gasto: </strong>
        R$: {total}
      </p>
      <p>{total > 10000 && "Você está gastando muito"}</p>
    </div>
  );
};

export default App;
