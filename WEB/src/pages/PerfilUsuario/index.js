import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './styles.css';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import UserWhite from '../../Image/user_white.png';
import {pilha} from '../../services/event';
import axios from 'axios';

import PerfilList from '../../components/PerfilList/PerfilList';

//userById
import {userById} from '../../services/user';

export default function PerfilUsuario() {

    const [user, setUser] = useState(
        {
            Id: 0,
            Name: "",
            Surname: "",
            Password: "",
            Email: "",
            Sex: "",
            Birthday: "",
            CPF: "",
            Phone: "",
            Creation_Date: "",
            CompanyId: 0,
            Is_Active: true,
            IdCategory: 0
          }
    );

    const [history, setHistory] = useState(
        {
           nameEvent: "",
           nameCompany: "",
           nameCategory: "",
        }
    );

    let userId = localStorage.getItem('userId');

    async function handleUser(){
        if (userId > 0) {
          try {
            const response = await userById({ userId }).then(res => {setUser(res.data)});
          } catch (err) {
            
          }
        } else {
          
        }
      }

      useEffect(()=>{
        handleUser();
      },[])

/*      async function handlePilha(){
          try {
            const response = axios.get(`https://eventech-back.herokuapp.com/v2/historys/`).then(res => 
            {setHistory(res.data)});
          } catch (err) {
          }
      }

      useEffect(()=>{
        handlePilha();
      },[])

*/
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
              <div className="user-perfil">
                  <img src={UserWhite}/>
                  <div className="about-perfil">
                    <h1>{user.Name} {user.Surname}</h1>
                    <h2>Phone: {user.Phone}</h2>
                    <h2>E-mail: {user.Email}</h2>
                    
                  </div>  
                </div> 
                </div>

            </div>

            <div className="history-placeholder">
            <div className="text-flex">
                <h3>HISTÓRICO DE EVENTOS</h3>
            </div>
                <PerfilList />
            </div>    

        </div>

    );
}
