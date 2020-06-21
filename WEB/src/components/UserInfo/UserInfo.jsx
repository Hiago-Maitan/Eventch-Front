import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './UserInfo.css'
import userImage from './user.png'

function UserInfo() {
    const [isLogged, setLogged] = useState(localStorage.getItem('isAuthenticated'));

    let content;
    let img;
    let linkPerfil = localStorage.getItem('is_company');

    const handleLoggout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('Username');
        localStorage.removeItem('userId');
        localStorage.removeItem('is_company');
    }

    if (isLogged) {

        img = <img src={userImage} />

        content =
            <div className="login-info">
                <Link to={linkPerfil} className="title">{localStorage.getItem('Username')}</Link>
                <a href="/login" className="login-sub-title" onClick={handleLoggout}>Sair</a>
            </div>

    } else {
        img = <img src={userImage} />

        content = <div className="login-info">
            <a href="/login" className="title">Login</a>
            <a href="/registroUsuario" className="login-sub-title">Não possui login?</a>
        </div>
    }

    return (<div className="login-content">{img}{content}</div>)
};

export default UserInfo;