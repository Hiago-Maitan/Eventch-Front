import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { FiCalendar, FiNavigation2, FiUser, FiMapping } from 'react-icons/fi';

import { event } from '../../services/event'

//import toolbar
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Backdrop from '../../components/Backdrop/Backdrop'

//company img
import companyLogo from './img/user_white.png'
import image1 from './img/image1.jpg'
import image2 from './img/image2.jpg'
import image3 from './img/image3.jpg'

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

  const [eventInfo, setEvent] = useState({
    Id: 0,
    Name: "",
    InitialDate: "",
    FinalDate: "",
    PlaceId: {
      Id: 0,
      Name: "",
      Description: "",
      Capacity: 0,
      City: "",
      State: "",
      ZipCode: "",
      Street: "",
      StreetNumber: 0
    },
    CreatedBy: {
      Id: 0,
      Name: "",
      About: "",
      Phone: "",
      SocialReason: "",
      FantasyName: ""
    },
    Description: "",
    AgeRange: "",
    Category: ""
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const history = useHistory();

  let eventId = props.match.params.id;

  async function handleEvent(){
    if (eventId > 0) {
      try {
        const response = await event({ eventId }).then(res => {setEvent(res.data)});
      } catch (err) {
        history.push('/')
      }
    } else {
      history.push('/')
    }
  }

  useEffect(() => {
    handleEvent();
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

      <div className="event-container">
        <div className="event-info">
          <h1>{eventInfo.Name}</h1>

          <div className="event-sub-title">
            <div>
              <FiNavigation2 className="" size={20} color="#1ABC9C" />{eventInfo.PlaceId.Street}, {eventInfo.PlaceId.StreetNumber} - {eventInfo.PlaceId.City} - {eventInfo.PlaceId.State}
            </div>
            <div>
              <FiCalendar className="" size={20} color="#1ABC9C" />
              {eventInfo.InitialDate} - {eventInfo.FinalDate}
            </div>
          </div>
          <p>{eventInfo.Description}</p>
        </div>
        <div className="company-info">
          <div className="company-content">
            <img src={companyLogo} />
            <h1>{eventInfo.CreatedBy.SocialReason}</h1>
            <p>{eventInfo.CreatedBy.About}</p>
          </div>
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
      <div className="btn-container">

        <div className="btn-reserve">
          <button type="button">Reservar Ingresso</button>
        </div>

      </div>
    </>
  );
}

export default Evento;