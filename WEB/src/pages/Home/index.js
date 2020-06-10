import React, {useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Login from '../../components/Login/';

import Modal from 'react-bootstrap/Modal';
import { FiUser, FiLogIn } from 'react-icons/fi'
import { Parallax } from "react-parallax";
import {useHistory, Link} from 'react-router-dom';
import Slider from "react-slick";
//import MultipleItems from './carosel';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
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
  

export default function Home(){


  


   const color = {
    color: '#1ABC9C'
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Responsividade da Toolbar

  const [sideDrawerOpen, setOpen] = useState(false);

  const handleSideClose = () => setOpen(false);
  const handleSideOpen = () => setOpen(true);

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleSideClose} />
  }



  //////////////carousel//////////////
  const [suggestions,setSuggestions]=useState([])


  useEffect(()=>{
fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
  setSuggestions(data);
})
  });

  let settings = {
    infinite: false,
    speed: 1000,
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1500,//960
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 2
        }
    }
  ]
  }
///////////////////////////////////


    return (
<div> 

    <div style={styles}>
    <Parallax     bgImage={require('../../Image/seminar.jpg')} strength={300} >

<h1 className="blocktext" height={0}>Não procure por eventos, a eventech fará isso por você.</h1>
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




<br></br>




<div className="container"    >
            {suggestions.length===0?(
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ):(
                <Slider {...settings}>
                {suggestions.map(current=>(
                        <div className="out" key={current.id}>
                          <br></br>
                            <div className="card">
                                <img className="rounded" alt={"users here"} src={`https://source.unsplash.com/random/${current.id}`} id="half-size-carousel" />
                                <div className="card-body">
                                    <h5 className="card-title">{current.username}</h5>
                                    <small className="card-text text-sm-center text-muted">In your contacts</small>
                                    <br/>{/* 
                                    <button className="btn btn-sm follow btn-primary">Entrar</button>

                                    */}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </Slider>
            )}
        </div>

<br></br>
<br></br>
<br></br>

<div>
<h1 className="lado">Eventos do seu interesse </h1>
<br></br>



<br></br>













</div>





<div className="container" >
            <h6 className="text-muted">carosel</h6>
            {suggestions.length===0?(
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ):(
                <Slider {...settings}>
                {suggestions.map(current=>(
                        <div className="out" key={current.id}>
                          <br></br>
                            <div className="card">
                                <img className="rounded" alt={"users here"} src={`https://source.unsplash.com/random/${current.id}`} id="half-size-carousel" />
                                <div className="card-body">
                                    <h5 className="card-title">{current.username}</h5>
                                    <small className="card-text text-sm-center text-muted">In your contacts</small>
                                    <br/>{/* 
                                    <button className="btn btn-sm follow btn-primary">Entrar</button>

                                    */}
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </Slider>
            )}
        </div>

<br></br>
<br></br>
<br></br>




<div className="container"> 
<h1>teste</h1>


   
  <br></br>
  <h3>Como se conta uma boa história? Essa é provavelmente
     uma pergunta ampla demais para uma resposta simples.
      Mas uma coisa é certa: uma narrativa bem estruturada 
      é um ótimo caminho a seguir.</h3>
      <br></br>

<div id="gray"> 
 <h3>
O gênero da narrativa é bem complexo. Além de ter vários elementos,
 segue uma estrutura específica e precisa ser bem planejado para funcionar
  do jeito certo.</h3></div>


    
<div id="red">
<Parallax  bgImage={require('../../Image/dashboard.jpg')} strength={100} >

<br></br>
 <div style={{ height: 200 }}>
 </div>
</Parallax>    
    </div>
  <br></br>
<div>
<h2>Algumas das maiores histórias já contadas, principalmente nas obras de ficção, se valeram desse incrível método. E quem disse que ele não pode ser
  explorado também na sua produção de conteúdo para a web?</h2>


</div>


  <br></br>
  <h2>
Quer saber tudo que há para explorar sobre essa forma de contar histórias
 e enriquecer seu storytelling? Então vamos lá!
  </h2>


  </div>

  

</div>

</div>
<div className="teste">
  <br></br>
</div>

<div className="teste">


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
                 <Button color="secondary" size="lg">Large Button</Button>

                 
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>





</div>








<div className="line">
            


            <Toolbar handleSideOpen={handleSideOpen}/>
            <SideDrawer show={sideDrawerOpen}/>
            {backdrop}
            
            {/* 
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
        
                             <Link className="user" onClick={handleShow}>
                                <FiUser size={40} color="#1ABC9C" />
                                   Login
                              </Link>
        
                              
                            </div>
                    </div>
                    */}
         <>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title style={color}>Faça seu Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
        
                <Login/>
        
                
                </Modal.Body>
                <Modal.Footer>
                 
                </Modal.Footer>
              </Modal>
            </>
        
            </div>


</div>




		)
}