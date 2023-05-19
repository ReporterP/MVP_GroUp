import React from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'universal-cookie';

const AuthApi = () => {

    const WebApp = window.Telegram.WebApp
    
    const navigate = useNavigate();

    // const telegram_id = WebApp.initDataUnsafe.user?.id === undefined ? 0: WebApp.initDataUnsafe.user?.id *1

    const telegram_id = 12345

    const correct_auth = (userData) => {
        const cookies = new Cookies();
        cookies.set('user', userData, { path: '/' });
        navigate("/grofile")
    }

    const auth = (id) => {

        const newUserData = {
            telegram_id: id * 1, 
            telegram_name: WebApp.initDataUnsafe.user?.username, 
            name: WebApp.initDataUnsafe.user?.first_name + " " + WebApp.initDataUnsafe.user?.last_name
        }

        // const newUserData = {
        //     telegram_id: id, 
        //     telegram_name: "@telegram", 
        //     name: "telegram telegramovich"
        // }
        
        fetch("https://group.ithub.software:5000/api/auth/", {
            method: "POST",
            headers: { 
                "Access-Control-Allow-Origin": "*", 
                'Content-Type': "application/json"},
            body: JSON.stringify(newUserData) })
        .then(response => response.json())
        .then(data => correct_auth(data))
        .catch(err => console.log(err))
    };

    const auth_in_browser = () => {}

    const check_in_auth = () => {
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

    check_in_auth();

    return <></>
}

export default AuthApi;
