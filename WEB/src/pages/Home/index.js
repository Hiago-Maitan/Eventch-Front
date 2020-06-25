import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Login from '../../components/Login/';

//lista de eventos
import List from '../../components/DynamicList/DynamicList'

import Modal from 'react-bootstrap/Modal';
import { FiUser, FiLogIn } from 'react-icons/fi'
import { Parallax } from "react-parallax";
import { useHistory, Link } from 'react-router-dom';
import Slider from "react-slick";
//import MultipleItems from './carosel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Table } from 'semantic-ui-react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop'

// imagens
import imgEmail from './img/email.jpg';


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

export default function Home() {

  const color = {
    color: '#1ABC9C'
  };

  //Responsividade da Toolbar

  const [sideDrawerOpen, setOpen] = useState(false);

  const handleSideClose = () => setOpen(false);
  const handleSideOpen = () => setOpen(true);

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleSideClose} />
  }

  return (
    <div>

      <div style={styles}>
        <Parallax bgImage={require('../../Image/Teste.jpg')} strength={500}>
          <h1 className="blocktext">Não procure por eventos, a eventech fará isso por você.</h1>
          <div style={{ height: 220 }}>
          </div>
        </Parallax>
        <Toolbar handleSideOpen={handleSideOpen} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}
        <div className="events-container">
          <h2>Em destaque</h2>
          <div className="list-placeholder">
            <List />
          </div>
        </div>
        <div className="about">
          <h1>Proposta Eventech</h1>
          <h4>Visamos conectar eventos á pessoas, de um jeito único e objetivo!</h4>
          <div className="about-inovation">
            <h2>Com um envio de e-mail interativo para eventos de interesse do usuário</h2>
            <img src={imgEmail} />
          </div>
        </div>
      </div>



    </div>




  )
}