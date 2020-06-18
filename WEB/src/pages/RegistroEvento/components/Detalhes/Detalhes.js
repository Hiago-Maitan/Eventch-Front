import React,{useState} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Col, Row, } from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';

//api de update
import { update } from '../../../../services/event'
import { create } from '../../../../services/place'
//api do viacep
import viacep from '../../../../services/viacep'

function Detalhes({change}) {
    //lugar
  const [lugar,setLugar] = useState('');
  const [descricao, setDescricao] = useState('');
  const [capacidade, setCapacidade] = useState(0);

// endereço
  const [cep,setCep] = useState('');
  const [bairro,setBairro] = useState('');
  const [uf,setUF] = useState('');
  const [logradouro,setLogradouro] = useState('');
  const [localidade,setLocalidade] = useState('');
  const [complemento,setComplemento] = useState('');
  const [numero, setNumero] = useState(0);

  async function handleViaCep(){
    const response = viacep({cep}).then(res => {
      setBairro(res.data.bairro);
      setUF(res.data.uf);
      setLogradouro(res.data.logradouro);
      setLocalidade(res.data.localidade);
    });
}

    function submitData(){

        change({
          lugar,
          descricao,
          capacidade,
          localidade,
          uf,
          cep,
          logradouro,
          numero
        });
    }

    const color = {
        color: 'red'
      };

  return <Form onSubmit={()=>{submitData()}}>
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
                  <h5>Nome do lugar: <span style={color}>*</span></h5>
                  <Input type="text"
                    name="lugar"
                    id="lugar"
                    value={lugar}
                    onChange={e => setLugar(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm={2}>
              <FormGroup>
                  <h5>Descrição: <span style={color}>*</span></h5>
                  <Input type="text"
                    name="lugar"
                    id="lugar"
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm={2}>
              <FormGroup>
                  <h5>Capacidade: <span style={color}>*</span></h5>
                  <Input type="text"
                    name="lugar"
                    id="lugar"
                    value={capacidade}
                    onChange={e => setCapacidade(e.target.value)}
                    required
                  />
                </FormGroup>
              </Col>
              <Col sm={2}>
                <FormGroup>
                  <h5>CEP: <span style={color}>*</span></h5>
                  <Input type="number"
                    name="cep"
                    id="cep"
                    value={cep}
                    onChange={e => setCep(e.target.value)}
                    onBlur={handleViaCep}
                    required
                  />
                </FormGroup>
              </Col>

              <Col sm={5}>
                <FormGroup>
                  <h5>Bairro: <span style={color}>*</span></h5>
                  <Input type="text"
                    name="bairro"
                    id="bairro"
                    value={bairro}
                    onChange={e => setBairro(e.target.value)}
                    
                  />
                </FormGroup>
              </Col>

              <Col sm={1}>
                <FormGroup>
                  <h5>UF: <span style={color}>*</span></h5>
                  <Input type="text"
                    name="uf"
                    id="uf"
                    value={uf}
                    onChange={e => setUF(e.target.value)}
                  />
                </FormGroup>
              </Col>

            </Row>

            <Row form>
              <Col sm={3}>
                <FormGroup>
                  <h5>Logadouro: <span style={color}>*</span></h5>
                  <Input type="text"
                    name="logradouro"
                    id="logradouro"
                    value={logradouro}
                    onChange={e => setLogradouro(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col sm={5}>
                <FormGroup>
                  <h5>Cidade: <span style={color}>*</span></h5>
                  <Input type="text"
                    name="address"
                    id="exampleAddress"
                    value={localidade}
                    onChange={e => setLocalidade(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col sm={2}>
                <FormGroup>
                  <h5>Número: <span style={color}>*</span></h5>
                  <Input type="number"
                    name="numero"
                    id="numero"
                    value={numero}
                    onChange={e => setNumero(e.target.value)}
                  />
                </FormGroup>
              </Col>

              <Col sm={10}>
                <FormGroup>
                  <h5>Complemento: <span style={color}>*</span></h5>
                  <Input type="text"
                    name="complemento"
                    id="complemento"
                    value={complemento}
                    onChange={e => setComplemento(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </div>
          <Row form>
            <Col md={9}></Col>
            <Col md={2}>
                <button className="button" type="submit">Continuar</button>
              
            </Col>
          </Row>
        </FormGroup>
      </Col>
    </Row>
  </div>
</Form>;
}

export default Detalhes;