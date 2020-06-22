import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import './style.css';

import {create} from '../../services/event';

//toolbar
import Backdrop from '../../components/Backdrop/Backdrop';
import Toolbar from '../../components/Toolbar/Toolbar';
import SideDrawer from '../../components/SideDrawer/SideDrawer';

//formulários
import Sobre from './components/Sobre/Sobre';
import Detalhes from './components/Detalhes/Detalhes';
import Ingresso from './components/Ingresso/Ingresso';


function RegistroEvento() {

    const [page,setPage] = useState(0); 
    const [metadata,setMetadata] = useState([]); 

    const history = useHistory();

    function switchPage(userData){
        
        setMetadata([...metadata,userData]);

        setPage(prevState => prevState+1);
    }

    function handlePage(){
        switch(page){
            case 1:
                return <Detalhes change={(userData)=> switchPage(userData)} index={page}/>
                break;
            case 2:
                return <Ingresso data={metadata} index={page}/>
                break;
            default: 
                return <Sobre change={(userData) => switchPage(userData)} index={page}/>
                break;
        }
    }

    //Responsividade da Toolbar
    const [sideDrawerOpen, setOpen] = useState(false);

    const handleSideClose = () => setOpen(false);
    const handleSideOpen = () => setOpen(true);

    let backdrop;

    if (sideDrawerOpen) {
        backdrop = <Backdrop click={handleSideClose} />
    }

    return (
        <div>
            <Toolbar handleSideOpen={handleSideOpen} />
            <SideDrawer show={sideDrawerOpen} />
            {backdrop}

            <div className="bg-register">
                {handlePage()}
            </div>

        </div>);
}

export default RegistroEvento;