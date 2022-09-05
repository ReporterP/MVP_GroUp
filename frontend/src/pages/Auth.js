import React from 'react';
import Logo from '../components/main/UI/Logo';
import AuthApi from '../components/api/AuthApi';

const Auth = () => {

    return (
        <div className='auth'>
            <Logo/>
            <AuthApi />
        </div>
    );
}

export default Auth;
