import React,{useState,useEffect} from 'react';
import userById from '../../services/userById';
import './UserInfo.css'
import userImage from './user.png'

function UserInfo(){
    const [isLogged,setLogged] = useState(false);
    const [user,setUser] = useState({});

    let content
    let img

    useEffect(()=>{
        try{

        const response = userById.then(res => setUser(res.data));
    
        } catch (err) {
    
            alert('não foi possivel');
        }
    },[]);

    if(isLogged){
        img = <img src={user.Image}/>
        content = <span className="title">{user.Name}</span>;
    } else {
        img = <img src={userImage}/>

        content =  <div className="login-info">
                        <a href="/" className="title">Login</a>
                        <a href="/RegisterUser" className="login-sub-title">Não possui login?</a>
                    </div>
    }

return (<div className="login-content">{img}{content}</div>)
};

export default UserInfo;