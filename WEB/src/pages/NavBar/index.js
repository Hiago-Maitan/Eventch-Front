import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import LogonUser from '../LogonUser';

import Modal from 'react-bootstrap/Modal';
import { FiUser, FiLogIn } from 'react-icons/fi'
import { Parallax } from "react-parallax";
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import {useHistory, Link} from 'react-router-dom';
import Slider from "react-slick";
//import MultipleItems from './carosel';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Table } from 'semantic-ui-react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";

export default function NavBar(){

   const color = {
    color: '#1ABC9C'
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
<div> 

		<div className="line">
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
            