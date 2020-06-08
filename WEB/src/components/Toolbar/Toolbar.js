import React from 'react';
import './Toolbar.css'
import logo from '../../components/Toolbar/tickets.png'
//Side Drawer
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import UserInfo from '../UserInfo/UserInfo';
const toolbar = props => (
    <header>
         <nav className="bg-nav">
     <div className="drawer-placeholder">
                <DrawerToggleButton click={props.handleSideOpen}/>
            </div>
            <div className="bg-logo"><a href="/"><img src={logo} className="img-logo"/></a></div>
            <div className="menu-item">
                <ul>
                    <li><a href="/" >Eventos</a></li>
                    <li><a href="/" >Sobre Nós</a></li>
                </ul>
            </div>
            <div className="login-placeholder">
                <UserInfo/>
            </div>
        </nav>
    </header>
)

export default toolbar; 