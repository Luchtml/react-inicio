import React from 'react';

const Titulo = (props) => {
  return <h1 style={{color: props.cor}}>{props.texto}</h1>
}

const App = () => {

  return <div>
    <Titulo cor="red" texto="Meu Titulo 1"/>
    <Titulo cor="blue" texto="Meu Titulo 2"/>
    <Titulo texto="Meu Titulo 3"/>
  </div>
};

export default App;
