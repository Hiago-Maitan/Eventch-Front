import React from 'react';
import './Toolbar.css'
import logo from '../../components/Toolbar/tickets.png'

const toolbar = props => (
    <header>
        <nav className="bg-nav">
        <div className="bg-line"></div>
            <div className="bg-logo"><a href="/"><img src={logo} className="img-logo"/></a></div>
            <div className="menu-item">
                <ul>
                    <li><a href="/" >Eventos</a></li>
                    <li><a href="/" >Sobre Nós</a></li>
                </ul>
            </div>
        </nav>
    </header>
)

export default toolbar;