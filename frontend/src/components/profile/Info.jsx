// import { WebApp } from '@grammyjs/web-app';
import React from 'react';
import Cookies from 'universal-cookie';
import telegramLogo from '../../img/Telegram.svg';
import GroFile from '../../img/GroFile.svg'
var _ = require('lodash');

const Info = () => {
  var cookie = new Cookies();
  const cookiesUser = cookie.get("user")

  return (
    <>
      <div className='userInfoContainer'>
        <div>
          <div className='information'>
            <div className='userImg'>
              <img src={GroFile} alt="avatar" />
            </div>
            <div className='contact'>
              <div className='userNameContact'>
                <p>{_.startCase(cookiesUser.name)}</p>
              </div>
              <div className='userContact'>
                <div className='Telegram'>
                  <img src={telegramLogo} alt="telegram" /><p>{cookiesUser.telegram_name}</p>
                </div>
                <div className='email'>

                </div>
                <div className='telefone'>

                </div>
              </div>
            </div>
          </div>
          <div className='userDescription'>
            <textarea />
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
