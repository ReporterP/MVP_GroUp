import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';
import TelegramLoginButton from 'telegram-login-button'

const AuthApi = () => {
    
    const navigate = useNavigate();
    const WebApp = typeof window !== 'undefined' ? window.Telegram.WebApp : null;

    const telegram_id_in_WebApp = WebApp.initDataUnsafe.user?.id === undefined ?
    0
    // 484910148
    : WebApp.initDataUnsafe.user?.id *1
    
    const [inBrowser, setinBrowser] = useState(false);    
    const userDataInBrowser = useRef({})
    
    const handleTelegramResponse = user => {
        userDataInBrowser.current = user;
        check_in_auth(user.id);
    };
    
    const correct_auth = (userData) => {
        const cookies = new Cookies();
        cookies.set('user', userData, { path: '/' });
        navigate("/grofile")
    }

    const auth = (id) => {
        const newUserData = !inBrowser?{
            telegram_id: id * 1, 
            telegram_name: WebApp.initDataUnsafe.user?.username, 
            name: WebApp.initDataUnsafe.user?.first_name + " " + WebApp.initDataUnsafe.user?.last_name
        }:{
            telegram_id: id * 1, 
            telegram_name: userDataInBrowser.current?.username, 
            name: userDataInBrowser.current?.first_name + " " + userDataInBrowser.current?.last_name
        }

        fetch("https://group.ithub.software:5000/api/auth", {
            method: "POST",
            headers: { 
                "Access-Control-Allow-Origin": "*", 
                'Content-Type': "application/json"},
            body: JSON.stringify(newUserData) })
        .then(response => response.json())
        .then(data => correct_auth(data))
        .catch(err => console.log(err))
    };

    const auth_in_browser = () => setinBrowser(true)

    const check_in_auth = telegram_id => {
        fetch('https://group.ithub.software:5000/api/auth/'+telegram_id, {
            method: "GET",
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        })
        .then(response => response.text())
        .then(data => {
                if (data === "err") {
                    auth(telegram_id)
                } else if (data === "enter_in_browser"){
                    auth_in_browser()
                } else {
                    correct_auth(data)
                }
            })
        .catch(err =>  alert(err))
    }

    check_in_auth(telegram_id_in_WebApp);

    return (
    <>{inBrowser&&
        <TelegramLoginButton 
        botName="GroUpBeta_bot" 
        dataOnauth={handleTelegramResponse} 
        className='telegram_login_button'/>
    }</>
    )
}

export default AuthApi;
