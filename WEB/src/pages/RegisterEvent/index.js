import React, { useState } from 'react';
//import logo from './logo.svg';
//import ImageUploader from 'react-images-upload';
import { Button, Form, FormGroup, Label, Input, FormText, Select } from 'reactstrap';
import { Col, Row, } from 'reactstrap';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
// import ImageUploader from 'react-images-upload';


//toolbar import
import Backdrop from '../../components/Backdrop/Backdrop'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

import { FiUser, FiLogIn } from 'react-icons/fi'
import { useHistory, Link } from 'react-router-dom';

import regEventoAPI from '../../services/regEventoAPI';
import regCategoriaAPI from '../../services/regCategoriaAPI';

function RegistrarEvento() {

  const [name, setName] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [initialHour, setInitialHour] = useState('');
  const [finalHour, setFinalHour] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [description, setDescription] = useState('');

  const [categoryName, setCategoryName] = useState('Curso');

  const category = [
    { value: 'Curso', name: 'Curso' },
    { value: 'Workshop', name: 'Workshop' },
    { value: 'Palestra', name: 'Palestra' },
    { value: 'Outros', name: 'Outros' },
  ];

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      initialDate,
      finalDate,
      initialHour,
      finalHour,
      categoryId,
      description,
    };

    const data2 = {
      categoryName
    };

    try {
      let id;

      const response = await regEventoAPI.post('#', data).then(res => id = res.data);

      alert(`Evento Cadastrado !`);

      history.push('/evento/'+id);
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  //Responsividade da Toolbar

  const [sideDrawerOpen, setOpen] = useState(false);

  const handleSideClose = () => setOpen(false);
  const handleSideOpen = () => setOpen(true);

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleSideClose} />
  }

  return (

    <div >
      <Toolbar handleSideOpen={handleSideOpen} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}

      <Form onSubmit={handleRegister}>


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
                  value={initialHour}
                  onChange={e => setInitialHour(e.target.value)}
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
                  value={finalHour}
                  onChange={e => setFinalHour(e.target.value)}
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

                      <Input type="select" name="select" id="exampleSelect" value={categoryName} onChange={e => setCategoryName(e.target.value)}>
                        {category.map((item, index) => (
                          <option value={item.value}>{item.name}</option>
                        ))}
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
    );
}


export default RegistrarEvento;
