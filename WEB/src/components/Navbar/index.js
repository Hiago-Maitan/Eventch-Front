import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Login from '../../components/Login/';

import Modal from 'react-bootstrap/Modal';
import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';
//import MultipleItems from './carosel';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

export default function Navbar(){

  return (

<div className="navbar">

              <Link className="logo" to="/"></Link>

                <div className="dropdown dropOne">
                 <button className="dropbtn">Eventos </button>

                   <div className="dropdown-content">
                      <a href="#">Publicar Evento</a>
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
            </div>
    <>
      <ModalLogin/>
    </>

    </div>
<div>
    );
}

 