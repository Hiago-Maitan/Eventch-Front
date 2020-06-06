import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row,} from 'reactstrap';
import './styles.css';
import Dropdown from 'react-bootstrap/Dropdown';
import ImageUploader from 'react-images-upload';

import Modal from 'react-bootstrap/Modal';

import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';

class Ingressos extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: ''
    };
    this._handleImageChange = this._handleImageChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }

  render() {
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    }

  const color = {
    color: '#1ABC9C'
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

<div className="container01">
<Row form>
           
      <Col md={1}></Col>   


      <Col md={9}>

        <FormGroup>


<h2>Crie o seu ingresso</h2>
<br></br>

<div>

<br></br>

<Row form>
<Col md={5}>
<FormGroup>
        <h5>Nome do ingresso: <span style={color}>*</span></h5>
        <Input type="name" name="name" id="nameTik" placeholder="" />
</FormGroup>
</Col>
</Row>

<br></br>

<Row form>

      <Col md={3}>
        <FormGroup>
        <h5>Início das vendas: <span style={color}>*</span></h5>
        <Input
          type="date"
          name="dataInicio"
          id="exampleDate"
          placeholder="date placeholder"
        />  
      </FormGroup>
</Col>
 <Col md={3}>
      <FormGroup>
     
        <h5>Horário de ínicio: <span style={color}>*</span></h5>
        <Input
          type="time"
          name="horaInicio"
          id="exampleTime"
          placeholder="time placeholder"
        />
      </FormGroup> </Col>

      <Col md={3}>
        <FormGroup>
        <h5>Término das vendas: <span style={color}>*</span></h5>
        <Input
          type="date"
          name="dataTermino"
          id="exampleDate"
          placeholder="date placeholder"
        />  
      </FormGroup>
</Col>
 <Col md={3}>
      <FormGroup>
     
        <h5>Horário de término: <span style={color}>*</span></h5>
        <Input
          type="time"
          name="horaTermino"
          id="exTime"
          placeholder="time placeholder"
        />
      </FormGroup> </Col>
</Row>
<br></br>

<Row form>
<Col md={5}>
<FormGroup>
        <h5>Quantidade de ingressos:<span style={color}>*</span></h5>
        <Input
          type="number"
          name="numberIngressos"
          id="exampleNumber"
          placeholder=""
        />
      </FormGroup>
</Col>
      <Col md={5}>

      <FormGroup>
        <h5>Quantidade por pessoa: <span style={color}>*</span></h5>
        <Input
          type="number"
          name="numberPessoa"
          id="exampleNumber"
          placeholder="Não preencha se não há limite"
          />
      </FormGroup>
          </Col>
</Row>

<br></br>

<h5>Tipo de ingresso <span style={color}>*</span></h5>
<Row form>

    <Col md={2}>


        <FormGroup check>
          <Label check>
            <Input type="radio" id='pago' name="radio1" />{' '}
            Ingressos pago</Label>
        </FormGroup></Col>

          <Col md={3}>
        <FormGroup check>
          <Label check>
            <Input type="radio" id='gratuito' name="radio1" />{' '}
              Ingresso gratuito
          </Label>
        </FormGroup></Col>
</Row>

<br></br>
<Row form>
<Col md={3}>
<FormGroup>
        <h5>Preço unidade:<span style={color}> *</span></h5>
        <Input
          type="number"
          name="number"
          id="valorIngresso"
          placeholder="00,00"
        />
      </FormGroup>
</Col>
</Row>

<div> 
  
   <Row form>
  <Col md={9}></Col>
        <Col md={2}>  
  <Link className="user" to="/ingressos">
              <button className="button" type="submit">Continuar</button>
             </Link>
</Col> 
  </Row>
  
  <br></br> 
  <br></br>
   </div> 

</div>

</FormGroup>
</Col>
</Row>
</div>
</div>


</div>
    )
}
}

export default Ingressos;
