import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import UserWhite from '../../Image/user_white.png';
import Work from '../../Image/work.png';

export default function PerfilEmpresa(){
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
           <div class="color-container">

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

        <div class="company">
        <div className="text-flex2">
            <img src={Work}/>
            <div className="dados">
            <h1>Fantasy Name</h1>
            <h2>cnpj</h2>
            <h2>about</h2>
        </div>
        </div>
        </div>
        
    </div>

    <div class="text-flex">
        <h3>DASHBORD</h3>
    </div>

    <div class="flex">

        <div class="container-totalEvento">
            <div class="hist1">
                <h6 className="gambs">.</h6>
                <span>Total de eventos:</span>
                <h3>0</h3>
            </div>
        </div>

        <div class="container-totalEvento">
            <div class="hist1">
                <h6 className="gambs">.</h6>
                <span>Total de ingressos:</span>
                <h3>0</h3>
            </div>
        </div>

        <div class="container-totalEvento">
            <div class="hist1">
                <h6 className="gambs">.</h6>
                <span>Realizados:</span>
                <h3>0</h3>
            </div>
        </div>

    </div>

		</div>
        </div>
		);
}
