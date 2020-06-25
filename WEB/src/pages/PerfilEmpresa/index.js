import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import UserWhite from '../../Image/user_white.png';
import Work from '../../Image/work.png';

import { exportacao } from '../../services/event';

//import api
import { companyById } from '../../services/company'

export default function PerfilEmpresa() {
  const [eventId, setEventId] = useState('');

  const data = {
    eventId,
  };

  const [company, setCompany] = useState(
    {
      Id: 0,
      Name: "",
      About: "",
      Phone: "",
      SocialReason: "",
      FantasyName: "",
      TotalEvents: 0
    }
  );

  let companyId = localStorage.getItem('userId');

  async function handleCompany() {
    if (companyId > 0) {
      try {
        const response = await companyById({ companyId }).then(res => { setCompany(res.data) });
      } catch (err) {

      }
    } else {

    }
  }

  useEffect(() => {
    handleCompany();
  }, [])

  async function exportEvent() {
    const response = await exportacao('Long', { eventId }).then(res => { setEventId(res.data) });
  }

  const [sideDrawerOpen, setOpen] = useState(false);

  const handleSideClose = () => setOpen(false);
  const handleSideOpen = () => setOpen(true);

  let backdrop;

  if (sideDrawerOpen) {
    backdrop = <Backdrop click={handleSideClose} />
  }

  return (
    <div className="line">

      <Toolbar handleSideOpen={handleSideOpen} />
      <SideDrawer show={sideDrawerOpen} />
      {backdrop}

      <div>
        <div className="color-container">

          <div className="user-perfil">
            <img src={UserWhite} />
            <div className="about-perfil">
              <h1>{company.FantasyName}</h1>
              <h2>{company.Phone}</h2>
              <h2>{company.Email}</h2>
            </div>
            
          </div>

          <div className="user-perfil">
              <img src={Work} />
              <div className="about-perfil">
                <h1>{company.SocialReason}</h1>
                <h2>{company.About}</h2>
              </div>
          </div>

        </div>

        <div className="text-flex">
          <h3>GERAL</h3>
        </div>

        <div className="flex">

          <div className="container-totalEvento">
            <div className="align-card">
              <h6 className="gambs">.</h6>
              <span>Total de eventos:</span>
              <h2>{company.TotalEvents}</h2>
            </div>
          </div>

          <div className="container-totalEvento">
            <div className="align-card">
              <h6 className="gambs">.</h6>
              <span>Total de ingressos:</span>
              <h2>0</h2>
            </div>
          </div>

          <div className="container-totalEvento">
            <div className="align-card">
              <h6 className="gambs">.</h6>
              <span>Total arrecadado:</span>
              <h2>R$0,00</h2>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
