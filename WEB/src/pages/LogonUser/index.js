import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiLogIn, FiUser } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';


export default function Logon() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('#', email, password);

      history.push('/');
      alert('Login realizado com sucesso !');

    } catch (err) {
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
        <h1>Entre com sua conta</h1>

        <form onSubmit={handleLogin}>

          <input type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/registroUsuario">
            <FiLogIn size={16} color="#1ABC9C" />
                         Cadastro PF
                    </Link>
          <Link className="back-link" to="/registroEmpresa">
            <FiLogIn size={16} color="#1ABC9C" />
                         Cadastro PJ
                    </Link>
        </form>
      </div>
    </>
  )
}