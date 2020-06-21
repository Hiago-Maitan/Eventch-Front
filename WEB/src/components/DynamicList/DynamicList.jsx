import React, { useState, useEffect } from 'react';
import './DynamicList.css';


import { eventList } from '../../services/event'

function List() {

  //mapeia o objeto que a api de eventos ira retornar
  const [events, setEvents] = useState({
    TotalRows: 0,
    structEventLight: [
      {
        Id: 0,
        Name: "",
        InitialDate: "",
        FinalDate: "",
        Category: ""
      }
    ]
  });

  useEffect(() => {
    //faz o get na lista de eventos
    const response = eventList.get('#').then(res => setEvents(res.data));
  }, [])

  //tranforma o array em componentes para exibição
  const listEvents = events.structEventLight.map((event) => {
    //monta a url de referência
    let href = `/evento/${event.Id}`;
    return (<li key={event.Id}><a href={href}>{event.Name}</a><span>{event.Category}</span></li>)
  })

  return (
    <div className="div-list">
      <ul>{listEvents}</ul>
    </div>
  )
}

export default List;