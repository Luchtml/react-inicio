import React from 'react';
import Titulo from './Titulo';

const Produtos = () => {
  const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];

  return (
    <section>
      <Titulo text="Produtos" />

      {produtos.map(({ nome, propriedades }) => {
        return (
          <div key={nome} style={{ border: '1px solid black', margin: '15px', padding: '20px', fontSize: '1.5rem' }}>
            {nome}
            <ul>
              {propriedades.map((propriedade) => {
                return <li key={propriedade}>{propriedade}</li>
              })}
            </ul>
          </div>
        );
      })}

    </section>
  );
};

export default Produtos;
