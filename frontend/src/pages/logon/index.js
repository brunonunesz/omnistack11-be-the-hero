import React, {useState} from 'react';
//Componente que funciona como a tag a (link) para chamar outra pagina de modo SPA.
import {Link, useHistory} from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import './style.css'

//Importamos todos os arquivos a partir do JavaScript
import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/index.svg';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', {id});

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero"/>
            

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041"></FiLogIn>
                        Não tenho cadastro
                    </Link>
                    
                </form>
            </section>
            
            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}

/**
 * Instalar pacotes de icones no HTML. Para isso instale um pacote com NPM
 * npm install react-icons; depois importe dentro do componente.
 * todo icone é um componente, então utilizamos como um componente.
 */