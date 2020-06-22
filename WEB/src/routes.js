import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

//import rotas
import {PrivateRoute} from './components/PrivateRoute/PrivateRoute'

// imports páginas

import Home from './pages/Home';
import Evento from './pages/Evento';
import Ingressos from './pages/Ingressos';
import Detalhes from './pages/Detalhes';
import RegisterEvent from './pages/RegisterEvent';
import RegistroUsuario from './pages/RegistroUsuario';
import RegistroEmpresa from './pages/RegistroEmpresa';

import RegistroEvento from './pages/RegistroEvento';

import LogonUser from './pages/LogonUser';

import PerfilUsuario from './pages/PerfilUsuario';
import PerfilEmpresa from './pages/PerfilEmpresa';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />

        <Route path="/evento/:id" component={Evento} />

        <Route path="/login" component={LogonUser} />

        <Route path="/registroUsuario" component={RegistroUsuario} />

        <Route path="/registroEmpresa" component={RegistroEmpresa} />

        <Route path="/ingressos" component={Ingressos} />

        <PrivateRoute path="/registroEvento" component={RegistroEvento} />

        <PrivateRoute path="/detalhes/:id" component={Detalhes} />

        <PrivateRoute path="/registerEvent" component={RegisterEvent} />

        <PrivateRoute path="/perfilUsuario" component={PerfilUsuario} />

        <PrivateRoute path="/perfilEmpresa" component={PerfilEmpresa} />

      </Switch>
    </BrowserRouter>
  )
}