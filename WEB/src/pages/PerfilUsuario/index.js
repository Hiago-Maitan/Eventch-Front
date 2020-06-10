import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';

export default function PerfilUsuario() {
    return (
    <div>
      <div className="color-container">
        <div>
           <h1>Name Surname</h1>
            <h2>phone</h2>
            <h2>email</h2>
            <h2>birthday</h2>
            <h2>sex</h2>
        </div>
    </div>
    
    <div className="text-flex">
        <h3>HISTÓRICO DE EVENTOS</h3>
        <h3>MEUS INGRESSOS</h3>
    </div>

    <div className="container-historico">
        <div className="hist1">
            <h5 className="nome-evento"><b>Técnicas de UX</b></h5>
            <h5 className="empresa">Stefaninni</h5>
            <h5 className="categoria">Palestra</h5>
        </div>
    </div>

    <div className="container-historico">
        <div className="hist1">
            <h5 className="nome-evento"><b>Técnicas de UX</b></h5>
            <h5 className="empresa">Stefaninni</h5>
            <h5 className="categoria">Palestra</h5>
        </div>
    </div>

</div>
        
    );
}
