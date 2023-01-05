import React from 'react';
import Header from './Header';
import Home from './Home';
import Produtos from './Produtos';
import Titulo from './Titulo';

const App = () => {

  const Conteudo = () => {
  const { pathname } = window.location
    if(pathname === "/Produtos") {
      return <Produtos />
    } else {
      return <Home />
    }
  }

  return <div>
    <Header />
    <Conteudo />
  </div>
};

export default App;
