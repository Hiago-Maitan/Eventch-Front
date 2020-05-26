import React, {useState} from 'react';

import './styles.css';

import { FiUser, FiLogIn } from 'react-icons/fi'

import {useHistory, Link} from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import LogonUser from '../LogonUser';

import api from '../../services/api';

//new toolbar
import Toolbar from '../../components/Toolbar/Toolbar'

export default function Home(){

  const color = {
    color: '#1ABC9C'
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
    
		<div className="line">
      <Toolbar/>
            {/*<div className="navbar">

              <Link className="logo" to="/"></Link>

                <div className="dropdown dropOne">
                 <button className="dropbtn">Eventos </button>

                   <div className="dropdown-content">
                      <a href="/registerEvent">Publicar Evento</a>
                      <a href="#">Em Destaque</a>
                    </div>
                </div>

                <div className="dropdown dropTwo">
                    <button className="dropbtn">Sobre Nós </button>

                    <div className="dropdown-content">
                      <a href="#">Projeto</a>
                      <a href="#">Quem Somos</a>
                    </div>
                </div>
                        
                    <div className="dropdown dropOne">

                      <Link className="user" onClick={handleShow}>
                        <FiUser size={40} color="#1ABC9C" />
                           Login
                      </Link>
                    </div>
  </div>*/}

             <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={color}>Faça seu Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <LogonUser/>

        
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>

		</div>
		)
}

