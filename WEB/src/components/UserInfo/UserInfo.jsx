import React,{useState,useEffect} from 'react';
import './UserInfo.css'
import userImage from './user.png'

function UserInfo(){
    const [isLogged,setLogged] = useState(localStorage.getItem('isAuthenticated'));

    let content
    let img
    
    const handleLoggout = () => {
        alert(`Até mais, ${localStorage.getItem('@welcome-app/username')}.`)

        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('expirationDate');
        localStorage.removeItem('Username');

        
    }

    if(isLogged){
        
            img = <img src={userImage}/>
            content = 
            <div className="login-info">
            

                <a href="/perfilUsuario" className="title">{localStorage.getItem('')}</a>
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