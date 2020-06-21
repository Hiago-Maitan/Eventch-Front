import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row, Collapse } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';

//api de registro
import { create } from '../../../../services/event'


//componentes
import Sections from '../Sections/Sections'

// import { Container } from './styles';

function Ingresso({ data, index}) {

    //ingresso
    const [name, setName] = useState('');
    const [initialDate, setinItialDate] = useState('');
    const [initialHour, setInitialHour] = useState('');
    const [finalDate, setFinalDate] = useState('');
    const [finalHour, setFinalHour] = useState('');
    const [qtd, setQtd] = useState('');
    const [qtdPerPerson, setQtdPerPerson] = useState('');
    const [isPayment, setIsPayment] = useState('true');
    const [price, setPrice] = useState('');


    const [isOpen, setIsOpen] = useState(false);
    const [isClose, setClose] = useState(true);

    const history = useHistory();

    const open = () => setIsOpen(isClose);
    const close = () => setIsOpen(!isClose);

    const color = {
        color: 'red'
    };

    async function handleRegister(e) {
        e.preventDefault();

        const struct = {
            Name: data[0].name,
            Description: data[0].description,
            InitialDate: data[0].initialDate,
            FinalDate: data[0].finalDate,
            PlaceName: data[1].lugar,
            PlaceDescription: data[1].descricao,
            PlaceCapacity: data[1].capacidade,
            AddressCity: data[1].localidade,
            AddressState: data[1].uf,
            AddressZipCode: data[1].cep,
            AddressStreet: data[1].logradouro,
            AddressStreetNumber: data[1].numero,
            CreatedBy: localStorage.getItem('userId'),
            CategoryId: data[0].categoryId,
            TicketName: name,
            TicketInitialDate: initialDate + 'T' + initialHour + 'Z',
            TicketFinalDate: finalDate + 'T' + finalHour + 'Z',
            TicketQuantity: qtd,
            TicketQuantityPerPerson: qtdPerPerson,
            TicketIsPayment: isPayment,
            TicketPrice: price
        };

        try {
            let id;
            const response = await create.post('#', struct).then(res => id = res.data);
            history.push('/evento/' + id);
        } catch (err) {
            alert('Erro no cadastro, tente novamente.');
        }

    }

    return <Form onSubmit={handleRegister}>

        <div className="form-container">
            <Row form>
                <Col md={8}>
                    <FormGroup>
                        <h2 className="form-header">Crie o seu ingresso</h2>
                    </FormGroup>
                </Col>
                <Sections section={index}/>
            </Row>
            <Row form>
            <Col md={1}></Col>


            <Col md={7}>
              <FormGroup>
                <h4>1 - Qual sua prefêrencia de ingresso?</h4>
              </FormGroup>
            </Col>
          </Row>
            <Row form> 
            
            <Col md={1}></Col>
                <Col md={9}>
                <FormGroup>
                    <h5>Nome do ingresso: <span style={color}>*</span></h5>
                    <Input type="name"
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
<br/>
                            <Row form>

                            <Col md={1}></Col>
                                <Col md={4}>
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
                                <Col md={1}></Col>
                                <Col md={3}>
                                    <FormGroup>

                                        <h5>Horário de ínicio: <span style={color}>*</span></h5>
                                        <Input
                                            type="time"
                                            name="horaInicio"
                                            id="exampleTime"
                                            placeholder="time placeholder"
                                            value={initialHour}
                                            onChange={e => setInitialHour(e.target.value)}
                                            required
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row form>

            
                            <Col md={1}></Col>
                                <Col md={4}>
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
                                <Col md={1}></Col>
                                <Col md={3}>
                                    <FormGroup>

                                        <h5>Horário de término: <span style={color}>*</span></h5>
                                        <Input
                                            type="time"
                                            name="horaTermino"
                                            id="exTime"
                                            placeholder="time placeholder"
                                            value={finalHour}
                                            onChange={e => setFinalHour(e.target.value)}
                                            required
                                        />
                                    </FormGroup> </Col>
                            </Row>
                            <br></br>

                            <Row form>
            
            <Col md={1}></Col>
                                <Col md={4}>
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
                                <Col md={1}></Col>
                                <Col md={4}>
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



                            <Row form>
            
                            <Col md={1}></Col>
                            <h5>Tipo de ingresso <span style={color}>*</span></h5>
                            </Row>
                            <br/>
                            <Row form>
                            <Col md={1}></Col>
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
                                    
                            <Col md={1}></Col>
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

    </Form>;
}

export default Ingresso;