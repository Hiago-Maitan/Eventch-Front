import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import UserWhite from '../../Image/user_white.png';
import Work from '../../Image/work.png';

import {exportacao} from '../../services/event';

//import api
import {companyById} from '../../services/company'

const PerfilEmpresa = (props) => {

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

const history = useHistory();

let eventId = props.match.params.id;

//import api
import {companyById} from '../../services/company'

export default function PerfilEmpresa(){

    const [company, setCompany] = useState(
        {
            Id: 0,
            Name: "",
            Email: "",
            About: "",
            Phone: "",
            SocialReason: "",
            FantasyName: "",
            TotalEvents: 0
        }
    );

    let companyId = localStorage.getItem('userId');

    async function handleCompany(){
        if (companyId > 0) {
          try {
            const response = await companyById({ companyId }).then(res => {setCompany(res.data)});
          } catch (err) {
            
          }
        } else {
          
        }
      }

      useEffect(()=>{
        handleCompany();
      },[])

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
              <h1>{company.FantasyName}</h1>
              <h2>{company.Phone}</h2>
               <h2>tivit@yahoo.com</h2>
        </div>
        </div> 

        <div className="company">

                <h2>{company.Email}</h2>
        </div>
        </div> 

        <div class="company">
        <div className="text-flex2">
            <img src={Work}/>
            <div className="dados">
            <h1>{company.SocialReason}</h1>
            <h2 className="about">{company.About}.</h2>
        </div>

        </div>
    </div>
        
    </div>

    <div className="text-flex">
        <h3>DADOS GERAIS</h3>

    </div>
        
    </div>

    <div class="text-flex">
        <h3>DASHBOARD</h3>

    </div>

    <div className="flex">

        <div className="container-totalEvento">
            <div className="hist1">
                <h6 className="gambs">.</h6>
                <span>Total de eventos:</span>
  <h3>{company.TotalEvents}</h3>
            </div>
        </div>

        <div className="container-totalEvento">
            <div className="hist1">
                <h6 className="gambs">.</h6>
                <span>Total de ingressos:</span>
                <h3>0</h3>
            </div>
        </div>

        <div className="container-totalEvento">
            <div className="hist1">
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

export default PerfilEmpresa;
