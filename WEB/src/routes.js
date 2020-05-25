import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// imports páginas

import Home from './pages/Home';
import LogonUser from './pages/LogonUser';
import Evento from './pages/Evento';
import Ingressos from './pages/Ingressos';
import Detalhes from './pages/Detalhes';
import RegisterEvent from './pages/RegisterEvent';
import RegistroUsuario from './pages/RegistroUsuario';
import RegistroEmpresa from './pages/RegistroEmpresa';

export default function Routes(){
	return (
<BrowserRouter>
  <Switch>
     
     <Route path="/" exact component={Home} />
     
     <Route path="/login" component={LogonUser} />

     <Route path="/evento" component={Evento}/>

     <Route path="/registroUsuario" component={RegistroUsuario}/>

     <Route path="/registroEmpresa" component={RegistroEmpresa}/>
  
     <Route path="/ingressos" component={Ingressos}/>

     <Route path="/detalhes" component={Detalhes}/>

     <Route path="/RegisterEvent" component={RegisterEvent}/>


  </Switch>   
</BrowserRouter>
		)
}     

