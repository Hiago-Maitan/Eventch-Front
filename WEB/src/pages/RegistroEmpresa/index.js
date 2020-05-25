import React from 'react';
import {useHistory, Link} from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row,} from 'reactstrap';

import { FiLogIn, FiUser } from 'react-icons/fi'


class RegistroEmpresa  extends React.Component{

 
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
           color: 'red'
           };

	return(

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

<div className="container">
<Row form>
           <Col md={2}></Col>
           

<Col md={9}>
        <FormGroup>
    
          <h2>Faça seu cadastro</h2>
          <br></br>
        </FormGroup>
     </Col>
</Row>



<Row form>
    <Col md={1}></Col>
           
  <Col md={7}>
          <h4>1-Dados da empresa</h4>
          <br></br>
  </Col>
 </Row>
<Row form>

<Col md={1}></Col>
      <Col md={3}>
        <FormGroup>
        <h5>Nome da instituição: <span style={color}>*</span></h5>
        <Input
          type="text"
          name="nameCompany"
          id="nameCompany"
          placeholder=""
          
          />  
      </FormGroup>
</Col>

 <Col md={3}>
      <FormGroup>
     
        <h5>Nome fantasia: <span style={color}>*</span></h5>
        <Input
          type="text"
          name="nameFantasy"
          id="nameFantasy"
          placeholder=""
          
          />
      </FormGroup> </Col>  
</Row>

<Row form>
<Col md={1}></Col>
      <Col md={3}>
        <FormGroup>
        <h5>CNPJ: <span style={color}>*</span></h5>
        <Input
          type="number"
          name="cnpj"
          id="cnpj"
          placeholder="XX. XXX. XXX/XXXX-XX"
          />  
      </FormGroup>
</Col>
</Row>

<br></br>

<Row form>
           <Col md={1}></Col>
           

<Col md={7}>
                  <h4>2-Dados de conta</h4>
                  <br></br>

     </Col>
</Row>

<Row form>
<Col md={1}></Col>
      <Col md={3}>
        <FormGroup>
        <h5>E-mail: <span style={color}>*</span></h5>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder=""
          />  
      </FormGroup>
</Col>
</Row>

<Row form>

<Col md={1}></Col>
      <Col md={3}>
        <FormGroup>
        <h5>Senha: <span style={color}>*</span></h5>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="*******"
          />  
      </FormGroup>
</Col>
 <Col md={3}>
      <FormGroup>
     
        <h5>Confime sua senha: <span style={color}>*</span></h5>
        <Input
          type="password"
          name="password"
          id="password"
          placeholder="*******"
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
              4-Descrição da instituição:
            </h4>
            <br></br>
  <FormGroup>
        <h5>Conte um pouco sobre a sua proposta...<span style={color}>*</span></h5>
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
  
  <button className="button" type="submit">Continuar</button>
</Col> 

  
  </Row>
  
  <br></br> 
  <br></br>
   </div>
   </div> 

      </Form>
          </div>
          </div>
		)
    }}
    
    
    export default RegistroEmpresa;
