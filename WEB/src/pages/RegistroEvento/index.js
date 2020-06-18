import React, { useState, useContext } from 'react';

import regEventoAPI from '../../services/regEventoAPI';

//toolbar import
import Backdrop from '../../components/Backdrop/Backdrop'
import Toolbar from '../../components/Toolbar/Toolbar'
import SideDrawer from '../../components/SideDrawer/SideDrawer'
import Sobre from './components/Sobre/Sobre';
import Detalhes from './components/Detalhes/Detalhes';
import { Redirect } from 'react-router-dom';


import { useHistory, Link } from 'react-router-dom';

// import { Container } from './styles';

function RegistroEvento() {

    const [page,setPage] = useState(0); 
    const [metadata,setMetadata] = useState([]); 

    const history = useHistory();

    function switchPage(userData){
        
        setMetadata([...metadata,userData]);

        setPage(prevState => prevState+1);
    }

    async function handleCreateEvent(data){
        let id;
        const response = await regEventoAPI.post('#', data).then(res => id = res.data);
        history.push('/evento/'+id);
    }

    function handlePage(){
        switch(page){
            case 1:
                
                return <Detalhes change={(userData)=> switchPage(userData)}/>
                break;
            case 2:
                const data = {
                    Name: metadata[0].name,
                    Description: metadata[0].description,
                    InitialDate: metadata[0].initialDate,
                    FinalDate: metadata[0].finalDate,
                    PlaceName: metadata[1].lugar,
                    PlaceDescription: metadata[1].descricao,
                    PlaceCapacity: metadata[1].capacidade,
                    AddressCity: metadata[1].localidade,
                    AddressState: metadata[1].uf,
                    AddressZipCode: metadata[1].cep,
                    AddressStreet: metadata[1].logradouro,
                    AddressStreetNumber: metadata[1].numero,
                    CreatedBy: localStorage.getItem('userId'),
                    CategoryId: metadata[0].categoryId,
                };
                
                handleCreateEvent(data);
                  break;
            default: 
                return <Sobre change={(userData) => switchPage(userData)}/>
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

            <div className="register-container">
                {handlePage()}
            </div>

        </div>);
}

export default RegistroEvento;