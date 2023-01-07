import React from 'react';
import Produto from './Produto';
 /* 
 https://ranekapi.origamid.dev/json/api/produto/tablet
 https://ranekapi.origamid.dev/json/api/produto/smartphone
 https://ranekapi.origamid.dev/json/api/produto/notebook
Crie um,a interface com 3 botões, um para cada produto
Ao clicar no botão faça um fetch a api e mostre os dados dos produtos
mostre apenas um produto por vez
mostre a mensagem carregando enquanto o fetch é realizado
*/

const App = () => {
  const [dados, setDados] = React.useState(null)

  async function handleClick(event) {
    const response = await (await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`))
    const json = await response.json()
    setDados(json)
  }

  return (
    <div>
      <button onClick={handleClick} style={{margin: ".5rem"}}>notebook</button>
      <button onClick={handleClick} style={{margin: ".5rem"}}>smartphone</button>
      <button onClick={handleClick} style={{margin: ".5rem"}}>tablet</button>
      <Produto dados={dados} />
    </div>
  );
};

export default App;
