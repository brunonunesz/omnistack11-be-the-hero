import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * Renderizar no DOM um componente chamado APP para dentro do ID "root".
 * O componente no React é uma função JS que retorna o HTML.
 * JSX (JavaScript XML) é um HTML integrado dentro do JS.
 */
ReactDOM.render(<App />, document.getElementById('root'));