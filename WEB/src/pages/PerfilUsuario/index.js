import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import UserWhite from '../../Image/user_white.png';

export default function PerfilUsuario() {
     const [sideDrawerOpen, setOpen] = useState(false);

     const handleSideClose = () => setOpen(false);
     const handleSideOpen = () => setOpen(true);

     let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleSideClose} />
  }

    return (
                <div className="line">

    <Toolbar handleSideOpen={handleSideOpen}/>
    <SideDrawer show={sideDrawerOpen}/>
    {backdrop}

        <div>
            <div className="color-container">
            
                <div className="text-flex2">
                  <img src={UserWhite}/>
                  <div className="dados">
                    <h1>Name Surname</h1>
                    <h2>phone</h2>
                    <h2>email</h2>
                    <h2>birthday</h2>
                    <h2>sex</h2>
                  </div>   
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
        </div>

    );
}
