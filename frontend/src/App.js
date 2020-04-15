import React/*, {useState}*/ from 'react';

import './global.css'

import Routes from './routes';

function App() {
  return (
    <Routes/>
  );
}

export default App;

/**
import Header from "./Header";


 * Componente React
 * Propriedades de um componente. Para receber dentro do arquivo Header devemos receber como parâmetros
 * title="Semana OmniStack"
 * 
 * Conceito de estado - toda vez que uma variável for alterada o componente
 * será renderizado novamente.
 *  Para utilizá-lo, adicione no import do React {useState} e utilize na
 *  declaração da variável.
 
function App() {
  //Essa função retorna um Array com o valor e a função que fará a atualização da variável.
  //Não podemos mudar a variável do React direto, temos que sobrepor.
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  return (
    //JSX
    <div>
      <Header>
        Contador: {counter}
      </Header>

      <button onClick={increment}>Incrementar</button>
    </div>
  );
}*/