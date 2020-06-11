import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiCalendar, FiNavigation2, FiUser, FiMapping } from 'react-icons/fi';

import { event } from '../../services/event'

//import toolbar
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'

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

  const [eventInfo, setEvent] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const history = useHistory();

  useEffect(() => {
    let eventId = 4;
    if (eventId > 0) {
      try {
        const response = event({ eventId }).then(res => setEvent(res.data));
      } catch (err) {
        history.push('/')
      }
    } else {
      history.push('/')
    }
  }, []);

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

      <div className="evento-container">
        <div className="content">

          <div className="one">
            <section>
              <h1>{eventInfo.Name}</h1>
  <h2> <FiNavigation2 className="" size={20} color="#1ABC9C" />{}</h2>
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
    </>
  );
}

export default Evento;