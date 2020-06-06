import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row,} from 'reactstrap';

import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';


export default function Detalhes (props) {
   const color = {
    color: 'red'
  };
  
  return (
    
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

             <Link className="user" to="/login">
               <FiUser size={40} color="#1ABC9C" />
                  Login
             </Link>
           </div>

   </div>

<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    <div>

 <div className="container">   
<Row form>
<Col md={2}></Col>


<Col md={9}>
<FormGroup>

<h2>Conte mais detalhes</h2>

<br></br>
<br></br>
<br></br>

<h4>1 - Qual categoria o seu evento se encaixa?</h4>
<br></br>


<FormGroup row>

<Col sm={6}>
<Input type="select" name="select" id="exampleSelect">
<option>Curso</option>
<option>WorkShops</option>
<option>Palestra</option>
</Input>
</Col>
</FormGroup>

<br></br>

<h4>2 - Onde vai acontecer o evento?</h4>

<br></br>

<div>
<Row form>
<Col sm={3}>
  <FormGroup>
    <h5>Nome do local: <span style={color}>*</span></h5>
      <Input type="text" 
      name="address" 
      id="exampleAddress"
      />
  </FormGroup>
</Col>


<Col sm={6}>
  <FormGroup>
    <h5>Descrição do evento: <span style={color}>*</span></h5>
        <Input type="textarea" 
        name="text" 
        id="exampleText" 
        />
  </FormGroup>      
</Col>

<Col sm={3}>
  <FormGroup>
    <h5>CEP: <span style={color}>*</span></h5>
        <Input type="number" 
        name="cep" 
        id="cep" 
        />
  </FormGroup>      
</Col>
</Row>

</div>

  <br></br>
  <br></br>
  <br></br>

<div>


</div> 

  <Row form>
    <Col md={9}></Col>
           <Col md={2}>  
  <Link className="user" to="/ingressos">
              <button className="button" type="submit">Continuar</button>
             </Link>
      </Col> 
  </Row>


<br></br>


</FormGroup>
</Col>
</Row>
</div>
</div>   
</div>

)
}







