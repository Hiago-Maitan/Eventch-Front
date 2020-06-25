import React, { useState, useEffect } from 'react';
import {pilha} from '../../services/pilha';
import './PerfilList.css';
import List from '../DynamicList/DynamicList';

function PerfilList() {

  //mapeia o objeto que a api de pilha ira retornar
  const [eventHistory,setEventHistory] = useState(
    []
  );

  useEffect(()=>{
    const data = localStorage.getItem('events');
    try{
      const response = pilha.post('#',data).then(res => setEventHistory(res.data));
    } catch(err){
      
    }
  },[]);

  let listPilha;

  if(eventHistory.length>0){
   listPilha = eventHistory.map((event)=>{
    //monta a url de referência
    let href = `/evento/${event.Id}`;
   return (<li key={event.Id}><div className="list-header"><a href={href}>{event.Name}</a>{event.Category}</div><span>{event.CompanyName}</span><div>{event.TicketPrice}</div></li>)
  })
  } else{
    listPilha = <div>Você ainda não acessou nossos eventos :(</div>
  }

  return (
    <div className="div-static-list">
      <ul>{listPilha}</ul>
    </div>
  )
}

export default PerfilList;