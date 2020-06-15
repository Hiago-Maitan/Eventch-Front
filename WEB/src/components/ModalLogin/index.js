import React, {useState} from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Login from '../Login/';

import Modal from 'react-bootstrap/Modal';
import { FiUser, FiLogIn } from 'react-icons/fi'
import {useHistory, Link} from 'react-router-dom';

export default ModalLogin(){

  return (

 <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={color}>Faça seu Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Login/>

        
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
    </>

    ):
} 


