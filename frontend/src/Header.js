import React from 'react'; //Obrigatório

/**
 * Export - estamos disponibilizando para outros arquivos utilizerem
 * props.title - propriedade title
 * props.children - propriedade do filho da tag HEADER.
 * @param {*} props são propriedades que recebemos
 * @param {children} props propriedade especificada que vem dentro de props (children) 
 */
export default function Header(props) {
    return (
        <header>
            <h1>{props.children}</h1>

        </header>
    );
}