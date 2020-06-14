import React, {useState} from 'react';
//import logo from './logo.svg';
//import ImageUploader from 'react-images-upload';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row,} from 'reactstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
// import ImageUploader from 'react-images-upload';

import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';

import regEventoAPI from '../../services/regEventoAPI';
import regCategoriaAPI from '../../services/regCategoriaAPI';

  function RegistrarEvento(){

  const [name, setName] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [initialHour, setInitialHour] = useState('');
  const [finalHour, setFinalHour] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');

  const [nameCategory, setNameCategory] = useState('');

  const history = useHistory();

    async function handleRegister(e){
    e.preventDefault();

    const data= {
      name,
      initialDate,
      finalDate,
      initialHour,
      finalHour,
      categoryId,
      description,
    };

    const category = {
      nameCategory,
    };

    try{
      const response = await regEventoAPI.post('EventJPA', data);
      const response2 = await regCategoriaAPI.post('CategoryJPA', category);
      
      alert(`Evento Cadastrado !`);

      history.push('/detalhes');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
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
   

     

      <Form onSubmit={handleRegister}>   


        
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
    <br></br>
          <h2>VAMOS CRIAR O SEU EVENTO</h2>
          <br></br>
        </FormGroup>
     </Col>
</Row>

         <Row form>
           <Col md={1}></Col>
           

<Col md={7}>
        <FormGroup>
          <h4>1 - Qual o nome do seu evento?</h4>
          <br></br>
          <h5>Nome do evento:</h5>
          <Input 
          type="text" 
          name="evento" 
          id="nomeEvento" 
          placeholder="Digite aqui..." 
          value={name}
          onChange={e => setName(e.target.value)}
          required
          />
          <br></br> 

          <h4>2 - Quando é o evento?</h4>

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
          value={initialDate}
          onChange={e => setInitialDate(e.target.value)}
          required
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
          value={finalDate}
          onChange={e => setFinalDate(e.target.value)}
          required
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
       <h4>3 - Qual categoria o seu evento se encaixa?</h4>
<br></br>

  <FormGroup row>

<Col sm={6}>
<Input type="select" name="select" id="exampleSelect" onChange={e => setCategoryId(e.target.value)}
required>

<option
value={categoryId}
>Curso</option>

<option
value={categoryId}
>WorkShops</option>

<option
value={categoryId}
>Palestra</option>

<option
value={categoryId}
>Outros</option>
</Input>
</Col>
</FormGroup>

<br></br>
            <Col md={9}></Col>   
  </div>

           <h4>4 - Sua descrição do evento:</h4>
            <br></br>
  <FormGroup>
        <h5>Conte sobre o seu evento...</h5>
        <Input 
        type="textarea" 
        name="text" 
        id="exampleText"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required 
        />
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
    );
  }
  

export default RegistrarEvento ;
