import React, { useState } from 'react';

import './styles.css';

import { FiUser, FiLogIn } from 'react-icons/fi'

import { useHistory, Link } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import LogonUser from '../LogonUser';

import api from '../../services/api';

//new toolbar
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import { render } from '@testing-library/react';
import UserInfo from '../../components/UserInfo/UserInfo';

export default function Home() {

  const color = {
    color: '#1ABC9C'
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
  </div>
  )  
}