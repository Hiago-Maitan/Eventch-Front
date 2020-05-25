import React from 'react';
//import logo from './logo.svg';
//import ImageUploader from 'react-images-upload';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row,} from 'reactstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import ImageUploader from 'react-images-upload';

import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';

  class Evento extends React.Component{

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

<div >
   

     

      <Form>   


        
<br></br>
<br></br>    
<br></br>
<br></br>    
<br></br>
<br></br>

<div className="container">
<Row form>
           <Col md={2}></Col>
           

<Col md={9}>
        <FormGroup>
    
          <h2>Vamos criar seu evento</h2>
          <br></br>
        </FormGroup>
     </Col>
</Row>



         <Row form>
           <Col md={1}></Col>
           

<Col md={7}>
        <FormGroup>
          <h4>1-Qual o nome do seu evento?</h4>
          <br></br>
          <h5>Nome do evento:</h5>
          <Input type="nome" name="evento" id="nomeEvento" placeholder="" />
          <br></br> 

          <h4>2-Quando é o evento?</h4>

        </FormGroup>
     </Col>
</Row>

<Row form>
<Col md={1}></Col>
      <Col md={2}>
        <FormGroup>
        <h5>Data ínicio:</h5>
        <Input
          type="date"
          name="dataInicio"
          id="exampleDate"
          placeholder="date placeholder"
          />  
      </FormGroup>
</Col>

 <Col md={2}>
      <FormGroup>
          <h5>Data final:</h5>
        <Input
          type="date"
          name="dataTermino"
          id="exampleDate"
          placeholder="date placeholder"
          />
      </FormGroup> </Col>

      <Col md={2}>
        <FormGroup>
        <h5>Horário ínicio:</h5>
        <Input
          type="time"
          name="horaInicio"
          id="exampleTime"
          placeholder="time placeholder"
          />  
      </FormGroup>
</Col>
 <Col md={2}>
      <FormGroup>
     
        <h5>Horário final:</h5>
        <Input
          type="time"
          name="horaTermino"
          id="exTime"
          placeholder="time placeholder"
          />
      </FormGroup> </Col>
</Row>

<Row form>
           <Col md={1}></Col>
           

<Col md={9}>
        <FormGroup>
         
      <div>
        <br></br>
       
            <h4>3-Adicione uma imagem</h4>
               <br></br>
            

            <Col md={9}>
          <form onSubmit={this._handleSubmit}>
            <input md={9} type="file" onChange={this._handleImageChange} />
          </form>
          {$imagePreview}</Col> 
          <br></br>
          <br></br>
          <br></br>

  </div>

           <h4>
              4-Sua descrição do evento:
            </h4>
            <br></br>
  <FormGroup>
        <h5>Conte sobre o seu evento...</h5>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <br></br>
      <br></br>
      <br></br>    
          </FormGroup>
     </Col>
</Row>

  <div> 
  
  <Row form>
  <Col md={9}></Col>
    
    <Col md={2}>  
  <Link className="user" to="/detalhes">
              <button className="button" type="submit">Continuar</button>
             </Link>

  
</Col> 

  
  </Row>

  <br></br> 
  <br></br>
   </div> 
   </div>

      </Form>
          </div>
          </div>
    );
  }
  }

export default Evento ;
