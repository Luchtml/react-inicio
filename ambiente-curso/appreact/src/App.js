import React from 'react';
import Footer from './Footer';
import Form from './form/Form';
import Header from './Header';

const App = () => {
  const Teste = () => {
    const active = false;
    if (active) {
      return <p>Teste</p>;
    } else {
      return null
    }
  };

  return (
    <div>
      <Header />
      <Form />
      <Footer />
      <Teste />
    </div>
  );
};

export default App;
