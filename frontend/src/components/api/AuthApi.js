import React from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { WebApp } from "@grammyjs/web-app";
import Cookies from 'universal-cookie';

const AuthApi = () => {
    
    const navigate = useNavigate();

    // const telegram_id = WebApp.initDataUnsafe.user?.id === undefined ? 0: WebApp.initDataUnsafe.user?.id 

    const telegram_id = 1234

    const correct_auth = (userData) => {
        const cookies = new Cookies();
        cookies.set('user', userData, { path: '/' });
        navigate("/grofile")
    }

    const auth = (id) => {

        // const newUserData = {
        //     telegram_id: id, 
        //     telegram_name: WebApp.initDataUnsafe.user?.username, 
        //     name: WebApp.initDataUnsafe.user?.first_name + " " + WebApp.initDataUnsafe.user?.last_name
        // }

        const newUserData = {
            telegram_id: id, 
            telegram_name: "@telegram", 
            name: "telegram telegramovich"
        }

        axios.post('api/auth/', newUserData, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': "application/json"
            }
        }).then(res => correct_auth(res.data)).catch(err=>console.log(err))
    };

    const auth_in_browser = () => {}

    const check_in_auth = () => {
        axios.get('/api/auth/'+telegram_id, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': "application/json"
            }
        }).then(res=>{
            console.log(res.data)
            if (res.data === "err") {
                auth(telegram_id)
            } else if (res.data === "enter_in_browser"){
                auth_in_browser()
            } else {
                correct_auth(res.data)
            }
        }).catch(err => console.log(err))

    }
    console.log(check_in_auth())

    return <></>
}

export default AuthApi;
