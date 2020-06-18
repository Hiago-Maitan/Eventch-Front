import React,{useState,useEffect} from 'react';
import './UserInfo.css'
import userImage from './user.png'

function UserInfo(){
    const [isLogged,setLogged] = useState(localStorage.getItem('isAuthenticated'));
    const [isCompany,setCompany] = useState(localStorage.getItem('isCompany'));

    let content
    let img
    let href;

    if(isCompany){
        href='/perfilEmpresa';
    } else{ 
        href='/perfilUsuario';
    };
    
    const handleLoggout = () => {
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('Username');
        localStorage.removeItem('userId');
        localStorage.removeItem('isCompany');
    }
    if(isLogged){

            img = <img src={userImage}/>
            content = 
            <div className="login-info">
                <a href={href} className="title">{localStorage.getItem('Username')}</a>
                <a href="/login" className="login-sub-title" onClick={handleLoggout}>Sair</a>
            </div>
    } else {
        img = <img src={userImage}/>

        content =  <div className="login-info">
                        <a href="/login" className="title">Login</a>
                        <a href="/registroUsuario" className="login-sub-title">Não possui login?</a>
                    </div>
    }

return (<div className="login-content">{img}{content}</div>)
};

export default UserInfo;