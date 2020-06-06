import React from 'react';

import './SideDrawer.css'
import UserInfo from '../UserInfo/UserInfo';

//imagens
import events from './img/schedule.png'
import about from './img/about.png'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];

    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/" ><img src={events}/>Eventos</a></li>
            <li><a href="/" ><img src={about}/>Sobre Nós</a></li>
            <li><UserInfo/></li>
        </ul>
    </nav>
    )
}

export default sideDrawer;