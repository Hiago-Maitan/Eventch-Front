import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Login from '../../components/Login/';

import Modal from 'react-bootstrap/Modal';
import { FiUser, FiLogIn } from 'react-icons/fi'
import { Parallax } from "react-parallax";
import {useHistory, Link} from 'react-router-dom';
import Slider from "react-slick";
//import MultipleItems from './carosel';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import { Table } from 'semantic-ui-react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Toolbar from '../../components/Toolbar/Toolbar'


function groupIntoThrees (children) {

  const output = []
  let currentGroup = []

  children.forEach((child, index) => {
    currentGroup.push(child)

    if (index % 3 === 2) {
      output.push(currentGroup)
      currentGroup = []
    }
  })

  return output
}


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};


  const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  

export default function Home(){

   const color = {
    color: '#1ABC9C'
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
<div> 

    
<br></br>
<br></br>
<br></br><br></br>


    <div style={styles}>
    <Parallax     bgImage={require('../../Image/Teste.jpg')} strength={500}>

<h1 className="blocktext">Não procure por eventos, a eventech fará isso por você.</h1>
      <div style={{ height: 600 }}>
      </div>
    </Parallax>


		<div className="line">
            


<Toolbar/>{/* 
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
            */}
 <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={color}>Faça seu Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Login/>

        
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>

    </div>
<div>



<br></br>
<br></br>
<br></br>

<br />
  <Navbar bg="light" variant="light"> 
     <Form inline>
      <FormControl type="text" placeholder="Pesquisa por um nome" className="mr-sm-2" />
    </Form>
    <Form inline>
      <FormControl type="text" placeholder="Pesquise por uma cidade" className="mr-sm-2" />
    </Form>
    <NavDropdown title="Todas as datas" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">06/05</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">07/05</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">08/05</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">09/05</NavDropdown.Item>
      </NavDropdown>
  </Navbar>


</div>
<Table fixed>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nome do evento</Table.HeaderCell>
        <Table.HeaderCell>Criado Por</Table.HeaderCell>
        <Table.HeaderCell>Categoria</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Java</Table.Cell>
        <Table.Cell>Easynvest</Table.Cell>
        <Table.Cell>
        Workshop
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Básico de Outsystems</Table.Cell>
        <Table.Cell>Outsystems</Table.Cell>
        <Table.Cell>
        Workshop
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Cloud server</Table.Cell>
        <Table.Cell>Tivit</Table.Cell>
        <Table.Cell>
         Palestra
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

</div>

<div className="teste">


<MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
          <MDBCol className=" text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://blog.gs1br.org/wp-content/uploads/2017/08/116182-workshop-palestra-curso-simposio-seminario-congresso-qual-a-diferenca.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Uma gestão única e personalizado para você.</MDBCardTitle>
                 <h3>

                  Melhor gerenciamento da sua venda de ingressos...
                 </h3>
                <MDBBtn outline color="green" className="mb-7"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Começar agora!</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>


</div>



</div>




		)
}