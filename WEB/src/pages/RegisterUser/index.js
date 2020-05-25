import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { FiLogIn, FiUser } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function RegisterUser(){
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [birthday, setBirthday] = useState('');
  const [sex, setSex] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  async function handleRegister(e){
    e.preventDefault();

    const data= {
      name,
      surname,
      birthday,
      sex,
      cpf,
      phone,
      email,
      password,
    };

    try{
      const response = await api.post('#', data);
      
      alert(`Cadastro realizado com sucesso !`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }


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



<div className="registerUser-container">
   <div className="content">
<div class="row">
  <div class="column">
    <div class="card">
      <form onSubmit={handleRegister}>

       <h1>Faça seu cadastro</h1>

       <h2> 1- Dados pessoais </h2>


     <div className="input-group">
       <input placeholder="Nome" type="text" 
       className=""
       value={name}
       onChange={e => setName(e.target.value)}
       />

       <input placeholder="Sobrenome" 
       type="text" 
       className=""
       value={surname}
       onChange={e => setSurname(e.target.value)}
       />
     </div>

     <div className="input-group">
       <input
       type="date" 
       className=""
       value={birthday}
       onChange={e => setBirthday(e.target.value)}
       />

       <select>
       <option value="#">--Gênero--</option>

       <option
       value={sex}
       onChange={e => setSex(e.target.value)}
       >Masculino
       </option>

       <option
       value={sex}
       onChange={e => setSex(e.target.value)}
       >Feminino
       </option>

       </select>

    

      </div>


       <h4></h4>
       <input placeholder="CPF"
       type="number" 
       className=""
       value={cpf}
       onChange={e => setCpf(e.target.value)}
       />

       <h4></h4>
       <input placeholder="Celular"
       type="number" 
       className=""
       value={phone}
       onChange={e => setPhone(e.target.value)}
       />

       <h2 className=""> 2- Dados de conta </h2>


       <div className="input-group">
       <input placeholder="Digite seu e-mail"
       type="email" 
       className=""
       value={email}
       onChange={e => setEmail(e.target.value)}
       />

       <input placeholder="Confime seu e-mail"
       type="email" 
       className=""
       />

       </div>

       <div className="input-group">
       <input placeholder="Digite sua senha"
       type="password" 
       className=""
       value={password}
       onChange={e => setPassword(e.target.value)}
       />

       <input placeholder="Confime sua senha"
       type="password" 
       className=""
       />

       </div>

<div className="teste">
       <button to="/" className="button" type="submit">Cadastrar</button>
       <button className="button" type="submit">Voltar</button>
</div>
      </form>

</div>
</div>
</div>

   </div>
</div>









        </div>

       


		)
}