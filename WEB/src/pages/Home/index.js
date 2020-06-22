import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Login from '../../components/Login/';

//lista de eventos
import List from '../../components/DynamicList/DynamicList'

import Modal from 'react-bootstrap/Modal';
import { FiUser, FiLogIn } from 'react-icons/fi'
import { Parallax } from "react-parallax";
import { useHistory, Link } from 'react-router-dom';
import Slider from "react-slick";
//import MultipleItems from './carosel';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Table } from 'semantic-ui-react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop'
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




function groupIntoThrees (children) {




  
  const output = []
  let currentGroup = []

  children.forEach((child, index) => {
    currentGroup.push(child)

    if (index % 3 === 2) {
      output.push(currentGroup)
      currentGroup = []
    }
  })

  return output
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    
    <div
      className={className}
      
      style={{ ...style}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}



const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};
const insideStyles = {
  background: "white",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)"
};


  const image3 =
  "https://brightcove04pmdo-a.akamaihd.net/5104226627001/5104226627001_5297440765001_5280261645001-vs.jpg?pubId=5104226627001&videoId=5280261645001";
  


export default function Home() {

  const color = {
    color: '#1ABC9C'
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
    <div>

<div style={styles}>
    <Parallax     bgImage={require('../../Image/conference.jpg')} strength={300} >

<h1 className="blocktexth1" height={0}>Não procure por eventos, a eventech fará isso por você.</h1>
     <br></br>
      <div style={{ height: 100 }}>
      </div>
    </Parallax>






	
    <div>
<div className="teste">


<br></br>
</div>




<div>
<h1 className="lado">Eventos em destaque</h1>
<br></br>



</div>




<br></br>{///carousel multiple items react 
}



<br></br>
<div className="teste">
<div className="list-placeholder">
          <List/>
        </div>
</div>

<div className="cabecalho"> 
<h1 className="ladoT">Proposta Eventech  </h1>


   
  <br></br>
  <h3 className="lado">A Eventech é um portal de eventos, 
  visando conectar eventos á pessoas de uma forma rápida e 
  objetiva, para isso desenvolvemos um portal para cadastro 
  de eventos, pessoas jurídica e física, divulgação de eventos, 
  venda e reserva de ingressos, analytics para melhor controle dos eventos.</h3>
      <br></br>

<div id="gray"> 
 <h3 className="lado">
 Envio de e-mail interativo para eventos de interesse do usuário e suas 
 reservas de ingressos.</h3></div>


    
<div>
<Parallax  bgImage={require('../../Image/email.jpg')} strength={50} >

<br></br>
 <div style={{ height: 230 }}>
 </div>
</Parallax>    
    </div>
  <br></br>
<div>
<h3 className="lado">
Com um mercado tão variado, os consumidores que têm interesse 
em um determinado tipo de evento não possuem uma noção ampla
 de quantos eventos estão acontecendo e quais as suas localidades.
<br></br>
Com o acirramento da concorrência e o aumento da
 facilidade do cliente em ter acesso à informação, as
  empresas precisam encontrar formas baratas e práticas 
  de chamar a atenção do seu público alvo.

  </h3>

</div>
 </div>



  

</div>

<div className="teste">
  <br></br>
</div>

<div className="teste">
{/* 
<MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
          <MDBCol className=" text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://blog.gs1br.org/wp-content/uploads/2017/08/116182-workshop-palestra-curso-simposio-seminario-congresso-qual-a-diferenca.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Uma gestão única e personalizado para você.</MDBCardTitle>
                 <h3>

                  Melhor gerenciamento da sua venda de ingressos...
                 </h3>
                 <Button color="secondary" size="lg">Verificar</Button>

                 
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

*/}

<h1 className="ladoT1">Proposta Eventech  </h1>



<div id="gray1">
<Parallax  bgImage={require('../../Image/analytics1.png')} strength={50} >

<br></br>
 <div style={{ height: 221 }}>
 </div>
</Parallax>  


<br></br>
<br></br>
<br></br>
    </div>


<div id="red"> 
 <h3 className="lado1">
 Painéis que mostram métricas e indicadores importantes 
 para alcançar objetivos e metas traçadas 
 de forma visual, facilitando a compreensão das
 informações geradas dos eventos.
  </h3>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  <br></br>

</div>






</div>










        <Toolbar handleSideOpen={handleSideOpen} />
        <SideDrawer show={sideDrawerOpen} />
        {backdrop}

       

      </div>



    </div>




  )
}