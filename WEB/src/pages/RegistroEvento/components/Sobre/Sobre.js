import React,{useState} from 'react';

import { Button, Form, FormGroup, Label, Input, FormText, Select } from 'reactstrap';
import { Col, Row, } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//componentes
import Sections from '../Sections/Sections'

// import { Container } from './styles';

function Sobre({change, index}) {

  console.log(index);
    //config do evento
  const [name, setName] = useState('');
  const [initialDate, setInitialDate] = useState('');
  const [finalDate, setFinalDate] = useState('');
  const [initialHour, setInitialHour] = useState('');
  const [finalHour, setFinalHour] = useState('');
  const [categoryId, setCategoryId] = useState(0);
  const [description, setDescription] = useState('');
  // categoria
  const category = [
    { value: 1, name: 'MeetUp' },
    { value: 2, name: 'Workshop' },
    { value: 3, name: 'Palestra' },
  ];

  function submitData(){
      change({
        name,
        initialDate: initialDate+'T'+initialHour+'Z',
        finalDate: finalDate+'T'+finalHour+'Z',
        categoryId,
        description,
      });
  }

  return <Form onSubmit={()=>submitData()}>

        <div className="form-container">
          <Row form>
            <Col md={8}>
              <FormGroup>
                <h2 className="form-header">VAMOS CRIAR O SEU EVENTO</h2>
              </FormGroup>
            </Col>
            <Sections section={index}/>
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

                      <Input type="select" name="select" id="exampleSelect" value={categoryId} onChange={e => setCategoryId(e.target.value)}>
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

      </Form>;
}

export default Sobre;