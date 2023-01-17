// import React, { useEffect } from 'react';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";
// import { WebApp } from "@grammyjs/web-app";
// import Cookies from 'universal-cookie';
// import { Api } from "./Api";

// const AuthApi = () => {
    
//     const navigate = useNavigate();

//     // const telegram_id = WebApp.initDataUnsafe.user?.id === undefined ? 0: WebApp.initDataUnsafe.user?.id 

//     const telegram_id = 1234

//     const correct_auth = (userData) => {
//         const cookies = new Cookies();
//         cookies.set('user', userData, { path: '/' });
//         navigate("/grofile")
//     }

//     const auth = (id) => {

//         // const newUserData = {
//         //     telegram_id: id, 
//         //     telegram_name: WebApp.initDataUnsafe.user?.username, 
//         //     name: WebApp.initDataUnsafe.user?.first_name + " " + WebApp.initDataUnsafe.user?.last_name
//         // }

//         const newUserData = {
//             telegram_id: id, 
//             telegram_name: "@telegram", 
//             name: "telegram telegramovich"
//         }
//         let data = new Api('api/auth', newUserData).method('post')
//         console.log(data);
//         correct_auth(data);
//     };

//     const auth_in_browser = () => {


//     }

//     const check_in_auth = () => {
//         let data = new Api('/api/auth/'+telegram_id).method('get')
//         console.log(data)
//         if (data === "err") {
//             auth(telegram_id)
//         } else if (data === "enter_in_browser"){
//             auth_in_browser()
//         } else {
//             correct_auth(data)
//         }
//     }
//     console.log(check_in_auth())

//     check_in_auth();

//     return <></>
// }

// export default AuthApi;
