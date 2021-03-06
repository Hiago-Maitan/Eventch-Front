import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row, } from 'reactstrap';

import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown'
import ImageUploader from 'react-images-upload';

import { FiUser, FiLogIn } from 'react-icons/fi'
import { useHistory, Link } from 'react-router-dom';

import { register } from '../../services/user';

//toolbar import
import Backdrop from '../../components/Backdrop/Backdrop'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'

export default function RegistroUsuario() {
  const color = {
    color: 'red'
  };

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      surname,
      birthday,
      sex,
      cpf,
      phone,
      email,
      password,
    };

    try {

      const response = await register.post('#', data);

      alert(`Cadastro feito !`);

      history.push('/');
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
    <>
      <Toolbar handleSideOpen={handleSideOpen} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}


      <div className="bg-register">

        <Form onSubmit={handleRegister}>
          

          <div className="form-container">
            <Row form>
              <Col md={9}>
                <FormGroup>
                  <div className="form-header">Vamos a criar a sua conta pessoal</div>
                </FormGroup>
              </Col>
            </Row>

            <Row form>
              <Col md={1}></Col>
              <Col md={7}>
                <div className="sub-title">1 - Dados pessoais</div>
              </Col>
            </Row>

            <Row form>
              <Col md={1}></Col>
              <Col md={3}>
                <FormGroup>
                  <div className="input-label">Nome: <span style={color}>*</span></div>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder=""
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>

              <Col md={3}>
                <FormGroup>

                <div className="input-label">Sobrenome: <span style={color}>*</span></div>
                  <Input
                    type="text"
                    name="surname"
                    id="surname"
                    placeholder=""
                    value={surname}
                    onChange={e => setSurname(e.target.value)}
                    required
                  />
                </FormGroup> </Col>
            </Row>

            <Row form>
              <Col md={1}></Col>
              <Col md={3}>
                <FormGroup>
                  <h5>Data de nascimento: <span style={color}>*</span></h5>
                  <Input
                    type="date"
                    name="birthday"
                    id="birthday"
                    value={birthday}
                    onChange={e => setBirthday(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>

              <Col md={3}>
                <FormGroup>

                  <h5>Gênero:</h5>
                  <Input type="select" name="select" id="exampleSelect">

                    <option
                      value="#"
                    >Escolha...
           </option>

                    <option
                      value={sex}
                      onChange={e => setSex(e.target.value)}
                    >M
           </option>

                    <option
                      value={sex}
                      onChange={e => setSex(e.target.value)}
                    >F
           </option>

                  </Input>

                </FormGroup> </Col>
            </Row>

            <Row form>
              <Col md={1}></Col>
              <Col md={3}>
                <FormGroup>
                  <h5>CPF: <span style={color}>*</span></h5>
                  <Input
                    type="text"
                    name="cpf"
                    id="cpf"
                    maxLength="11"
                    size="11"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={e => setCpf(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>

            </Row>


            <Row form>
              <Col md={1}></Col>
              <Col md={3}>
                <FormGroup>
                  <h5>Celular: <span style={color}>*</span></h5>
                  <Input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="(00)90000-0000"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    required
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
                    required
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
                    placeholder="*********"
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>

                  <h5>Confime sua senha: <span style={color}>*</span></h5>
                  <Input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="*********"
                    required
                  />
                </FormGroup> </Col>
            </Row>


            <div>
              <Row form>
                <Col md={9}></Col>
                <Col md={2}>

                  <button className="button" type="submit">Continuar</button>
                </Col>
              </Row>
            </div>



            <br></br>
            <br></br>
          </div>


        </Form>
      </div>
    </>
  );
}





