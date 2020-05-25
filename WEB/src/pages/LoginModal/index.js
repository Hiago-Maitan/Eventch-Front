import React, {useState} from 'react';

import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import api from '../../services/api';
import './styles.css';

export default function LoginModal(){

	const color = {
    color: '#1ABC9C'
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

async function handleLogin(e){
e.preventDefault();

try {
const response = await api.post('#', email);

history.push('/');
alert('Login realizado com sucesso !');

} catch (err){
alert('Falha no login, tente novamente.')
 }
}

return(

<>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={color}>Faça seu Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <div className="logon-container">       
  <form onSubmit={handleLogin}>

    <input type="email" 
    placeholder="E-mail"
    value={email}
    onChange={e=> setEmail(e.target.value)} 
    />
    
    <input 
    type="password" 
    placeholder="Senha"
    value={password}
    onChange={e=> setPassword(e.target.value)}
    />

    <button className="button" type="submit">Entrar</button>

     <Link className="back-link" to="/registroUsuario">
                        <FiLogIn size={16} color="#1ABC9C" />
                         Não tenho cadastro
                    </Link>             
  </form>
</div>
        
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>

	)
}
