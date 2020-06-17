import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiLogIn, FiUser } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import {login} from '../../services/user';
import {loginAPI, loginAPI2} from '../../services/LoginAPI'; 


export default function Logon() {


  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const history = useHistory();   

  async function handleLogin(e) {
    e.preventDefault();

    // LOCALSTORAGE H2
    //  let username = e.target.elements.username.value;
    // localStorage.setItem('@welcome-app/username', username);

    try {

      let expiration_date;
      let is_authenticated;
      let username;
  
        // const response = await loginAPI({nome,senha})
        const response = await login({email,password}).then( res => {
        expiration_date = res.data.expiration_date;
        is_authenticated = res.data.is_authenticated;
        username = res.data.username;
      });


         //CONEXÂO LOGIN-EMPRESA 
         // const response2 = await loginAPI2({nome,senha});

      // .then( res => {
      //   expiration_date = res.data.expiration_date;
      //   is_authenticated = res.data.is_authenticated;
      //   username = res.data.username;
      // });

      // localStorage.setItem('name',response.data.name);

      localStorage.setItem('isAuthenticated',is_authenticated);
      localStorage.setItem('expirationDate',expiration_date);
      localStorage.setItem('Username',username);

      history.push('/perfilUsuario');
      
      alert(`Bem vindo a Eventech !`);

    } catch {
      alert('Falha no login, tente novamente.')
    }
  }
  //Responsividade da Toolbar

  const [sideDrawerOpen, setOpen] = useState(false);

  const handleSideClose = () => setOpen(false);
  const handleSideOpen = () => setOpen(true);

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleSideClose} />
  }

  return (
    <>

      <Toolbar handleSideOpen={handleSideOpen} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}
       

      <div className="login-container">
       <div className="colorContainer">
        <form onSubmit={handleLogin}>

        <h1>Entre com sua conta</h1>

          <input type="text"
            placeholder="E-mail"
            name="username"

            value={nome}
            onChange={e => setNome(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/registroUsuario">
            <FiLogIn size={16} color="#ffff" />
                         Cadastro PF
                    </Link>
          <Link className="back-link" to="/registroEmpresa">
            <FiLogIn size={16} color="#ffff" />
                         Cadastro PJ
                    </Link>
        </form>
        </div>
      </div>
    </>
  )
}