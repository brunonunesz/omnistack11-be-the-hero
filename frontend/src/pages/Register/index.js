import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';
import './style.css';

import logoImg from '../../assets/index.svg';

export default function Register() {
    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[whatsapp, setWhatsapp] = useState('');
    const[city, setCity] = useState('');
    const[uf, setUf] = useState('');

    //Modo de voltar para uma página especifica
    const history = useHistory();

    async function handleRegister(e) {
        //Esse parâmetro previne do comportamento padrão do evento, de recarregar a página.
        e.preventDefault();

        //Esses parâmetros são setados no evento com o onChange e usando os state.
        const data = {
            name,
            email,
            whatsapp,
            city,
            uf,
        };
        
        try {
            //Requisição para o NodeJs. Utilizamos o await para esperar a resposta; Necessário o async
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso:  ${response.data.id}`);

            history.push('/');
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }
        
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude
                        pessoas a encontrarem os casos da sua ONG.
                    </p>

                    
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"></FiArrowLeft>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)} 
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}  
                        />
                        <input 
                            placeholder="UF" 
                            style={{width: 80}}
                            value={uf}
                            onChange={e => setUf(e.target.value)} 
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
// <input placeholder="UF" style={{width: 80}} /> A primeira chave do style representa que estou incluindo código JS e a segunda um Objeto do JS