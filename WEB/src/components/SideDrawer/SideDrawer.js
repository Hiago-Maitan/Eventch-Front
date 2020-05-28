import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];

    if(props.show){
        drawerClasses = 'side-drawer open';
    }

    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/" ><img src="#"/>Eventos</a></li>
            <li><a href="/" ><img src="#"/>Sobre Nós</a></li>
        </ul>
    </nav>
    )
}

export default sideDrawer;