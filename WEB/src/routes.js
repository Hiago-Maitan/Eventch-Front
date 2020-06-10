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

<<<<<<< HEAD
import PerfilUsuario from './pages/PerfilUsuario';
import PerfilEmpresa from './pages/PerfilEmpresa';
=======
import LogonUser from './pages/LogonUser';

import PerfilUsuario from './pages/PerfilUsuario';
import PerfilEmpresa from './pages/PerfilEmpresa';


export default function Routes() {



  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact component={Home} />

        <Route path="/evento" component={Evento} />
>>>>>>> 8584a3bb7247c6b6a96b76fc395d32f89fafdd4b

        <Route path="/login" component={LogonUser} />

        <Route path="/registroUsuario" component={RegistroUsuario} />

        <Route path="/registroEmpresa" component={RegistroEmpresa} />

        <Route path="/ingressos" component={Ingressos} />

        <Route path="/detalhes" component={Detalhes} />

<<<<<<< HEAD
     <Route path="/registerEvent" component={RegisterEvent}/>
     
     <Route path="/perfilUsuario" component={PerfilUsuario}/>

          <Route path="/perfilEmpresa" component={PerfilEmpresa}/>
=======
        <PrivateRoute path="/registerEvent" component={RegisterEvent} />

        <Route path="/perfilUsuario" component={PerfilUsuario} />

        <Route path="/perfilEmpresa" component={PerfilEmpresa} />
>>>>>>> 8584a3bb7247c6b6a96b76fc395d32f89fafdd4b


      </Switch>
    </BrowserRouter>
  )
}

