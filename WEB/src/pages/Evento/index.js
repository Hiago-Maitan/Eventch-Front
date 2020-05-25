import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';

import { FiCalendar, FiNavigation2, FiUser, FiMapping } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
   id: 1,
    caption: 'Slide 1'  
  },
  {
   id: 2,
    caption: 'Slide 2'    
  },
  {
   id: 3,  
    caption: 'Slide 3'    
  },
  {
   id: 4,
    caption: 'Slide 41'    
  }
];

const Evento = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
      className="custom-tag"
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

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

 <div className="evento-container">
   <div className="content">

  <div className="one">
   <section>
     <h1>JAVA PARA INICIANTES</h1>
    <h2> <FiNavigation2 className="" size={20} color="#1ABC9C" /> Rua Haddock Lobo, 595 - Cerqueira César, São Paulo - SP</h2>
    <h2> <FiCalendar className="" size={20} color="#1ABC9C" /> 25/12/2020 - 01/01/2021 </h2>

     <p>Java é o ambiente computacional, ou plataforma, criada pela empresa estadunidense Sun Microsystems, e vendida para a Oracle depois de alguns anos. A plataforma permite desenvolver programas utilizando a linguagem de programação Java.</p>

    </section>
</div>

<div className="container-logo">
<div className="logo-evento">

    <h1>-----</h1>
    <h2>Nimbi</h2>
    
     <p>Java é o ambiente computacional, ou plataforma, criada pela empresa estadunidense Sun Microsystems, e vendida para a Oracle depois de alguns anos. A plataforma permite desenvolver programas utilizando a linguagem de programação Java.</p>
</div>
</div>

<div className="carousel">

 <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>

<Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
</div>


<div className="border-btnIngresso">

<div>
<button type="button" className="button btnIngresso">Reservar Ingresso</button>
</div>

</div>


    </div>
 </div>
</div>
  );
}

export default Evento;