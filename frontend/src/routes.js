import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Logon from './pages/logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncident} />
            </Switch>
        </BrowserRouter>
    );
}

/**
 * Configurar rotas:
 * Para instalar as rotas devemos instalar o pacote 'npm install react-router-dom'
 * Na aplicação iremos importar o BrowserRouter, Route e Switch.
 * Switch - faz que uma rota seja executado somente uma vez e uma de cada vez.
 */