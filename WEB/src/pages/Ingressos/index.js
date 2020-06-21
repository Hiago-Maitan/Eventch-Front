import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Collapse } from 'reactstrap';
import './styles.css';
import Dropdown from 'react-bootstrap/Dropdown';

import Modal from 'react-bootstrap/Modal';

import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';

import regIngressosAPI from '../../services/regIngressosAPI';


//toolbar import
import Backdrop from '../../components/Backdrop/Backdrop'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'


function Ingresso(){

  const [name, setName] = useState('');
  const [initialDate, setinItialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [qtd, setQtd] = useState('');
  const [qtdPerPerson, setQtdPerPerson] = useState('');
  const [isPayment, setIsPayment] = useState('true');
  const [price, setPrice] = useState('');

   const history = useHistory();

    async function handleRegister(e){
    e.preventDefault();

  const data= {
      name,
      initialDate,
      finalDate,
      qtd,
      qtdPerPerson,
      isPayment,
      price,
    };

    try{
      const response = await regIngressosAPI.post('TicketJPA',data);
      
      alert(`Cadastro feito !`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  const [isOpen, setIsOpen] = useState(false);
  const [isClose, setClose] = useState(true);


  const open = () => setIsOpen(isClose);
  const close = () => setIsOpen(!isClose);



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
       
<div>
<Form onSubmit={handleRegister}>

<div className="container01">
<Row form>
           
      <Col md={1}></Col>   


      <Col md={9}>

        <FormGroup>


<h2 className="form-header">Crie o seu ingresso</h2>
<br></br>

<div>

<br></br>

<Row form>
<Col md={5}>
<FormGroup>
        <h5>Nome do ingresso: <span style={color}>*</span></h5>
        <Input 
        type="name" 
        name="name" 
        id="nameTik" 
        placeholder=""
        value={name}
        onChange={e => setName(e.target.value)}
        required  
        />
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
          value={initialDate}
          onChange={e => setinItialDate(e.target.value)}
          required
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
          required
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
          value={finalDate}
          onChange={e => setFinalDate(e.target.value)}
          required
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
          required
        />
      </FormGroup> </Col>
</Row>
<br></br>

<Row form>
<Col md={5}>
<FormGroup>
        <h5>Quantidade de ingressos:<span style={color}> *</span></h5>
        <Input
          type="number"
          name="numberIngressos"
          id="exampleNumber"
          placeholder=""
          value={qtd}
          onChange={e => setQtd(e.target.value)}
          required
        />
      </FormGroup>
</Col>
      <Col md={5}>

      <FormGroup>
        <h5>Quantidade por pessoa:</h5>
        <Input
          type="number"
          name="numberPessoa"
          id="exampleNumber"
          placeholder="Não preencha se não há limite"
          value={qtdPerPerson}
          onChange={e => setQtdPerPerson(e.target.value)}
          required
          />
      </FormGroup>
          </Col>
</Row>

<br></br>

<h5>Tipo de ingresso <span style={color}>*</span></h5>
<Row form>

    <Col md={3}>

        <FormGroup check>
          <Label check>
            <Input 
            type="radio" 
            id='pago' 
            name="radio1" 
             onClick={open}
            value={isPayment}
            onChange={e => setIsPayment(e.target.value)}
            
            />{' '}
            Ingressos pago</Label>
        </FormGroup></Col>

          <Col md={3}>
        <FormGroup check>
          <Label check>
            <Input 
            type="radio" 
            id='gratuito' 
            name="radio1"  
            onClick={close}
            
            />{' '}
              Ingresso gratuito
          </Label>
        </FormGroup></Col>
</Row>

<br></br>
<Collapse isOpen={isOpen}>
<Row form>
<Col md={3}>
<FormGroup>
        <h5>Preço unidade:<span style={color}> *</span></h5>
        <Input
          type="number"
          name="number"
          id="valorIngresso"
          placeholder="00,00"
          value={finalDate}
          onChange={e => setFinalDate(e.target.value)}
          value={price}
          onChange={e => setPrice(e.target.value)}
          
        />
      </FormGroup>
</Col>
</Row>
</Collapse>

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

</FormGroup>
</Col>
</Row>
</div>
</Form>
</div>


</div>
    )
    }
    
    
    export default Ingresso;