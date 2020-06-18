import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row,} from 'reactstrap';

import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';



//toolbar import
import Backdrop from '../../components/Backdrop/Backdrop'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

export default function Detalhes (props) {
  
   const color = {
    color: 'red'
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
    


    <div className="margin-top">

      <Toolbar handleSideOpen={handleSideOpen} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}

 <div className="container">   
<Row form>
<Col md={2}></Col>

<Col md={9}>
<FormGroup>

<h2 className="form-header">Faça seu cadastro</h2>

<h4>6 - Onde vai acontecer o evento?</h4>

<br></br>

<div>
<Row form>
<Col sm={2}>
  <FormGroup>
    <h5>CEP: <span style={color}>*</span></h5>
        <Input type="number" 
        name="cep" 
        id="cep"
        />
  </FormGroup>      
</Col>

<Col sm={5}>
  <FormGroup>
    <h5>Bairro: <span style={color}>*</span></h5>
      <Input type="text" 
      name="bairro" 
      id="bairro"
      />
  </FormGroup>
</Col>

<Col sm={1}>
  <FormGroup>
    <h5>UF: <span style={color}>*</span></h5>
        <Input type="text" 
        name="uf" 
        id="uf" 
        />
  </FormGroup>      
</Col>

</Row>

<Row form>
<Col sm={3}>
  <FormGroup>
    <h5>Logadouro: <span style={color}>*</span></h5>
      <Input type="text" 
      name="logadouro" 
      id="logadouro"
      />
  </FormGroup>
</Col>

<Col sm={5}>
  <FormGroup>
    <h5>Nome do local: <span style={color}>*</span></h5>
      <Input type="text" 
      name="address" 
      id="exampleAddress"
      />
  </FormGroup>
</Col>

<Col sm={2}>
  <FormGroup>
    <h5>Número: <span style={color}>*</span></h5>
        <Input type="number" 
        name="numero" 
        id="numero" 
        />
  </FormGroup>      
</Col>

<Col sm={10}>
  <FormGroup>
    <h5>Complemento: <span style={color}>*</span></h5>
        <Input type="text" 
        name="complemento" 
        id="complemento" 
        />
  </FormGroup>      
</Col>
</Row>

<br></br>

<h4>7 - Como vai ser o seu evento?</h4>

<br></br>

<Row Form>
<Col sm={11}>
  <FormGroup>
    <h5>Descrição: <span style={color}>*</span></h5>
        <Input type="textarea" 
        name="text" 
        id="exampleText" 
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
</div>)
}







