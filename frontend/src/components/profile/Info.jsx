import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import telegramLogo from './../../img/Telegram.svg';
import emailLogo from './../../img/Email.svg';
import tellogo from './../../img/Vector.svg';
import GroFile from './../../img/GroFile.svg'
import EditButton from './../../img/EditButtonIcon.svg';
import TickIcon from './../../img/tickIcon.svg'

const Info = () => {
  var cookie = new Cookies();
  const cookiesUser = cookie.get("user")

  const [editInfo, seteditInfo] = useState(false);

  const [Name, setName] = useState(cookiesUser.name);
  const [Email, setEmail] = useState(cookiesUser.email);
  const [Telephone, setTelephone] = useState(cookiesUser.telephone);
  const [infoDesc, setinfoDesc] = useState("");

  useEffect(() => {
    fetch('https://group.ithub.software:5000/api/specialties/user/' + cookiesUser.id)
      .then(response => response.json())
      .then(data => { setinfoDesc(data[0]?.name === undefined ? "" : data[0]?.name) })
      .catch(err => console.log(err))
  }, []);

  const copy = async text => {
    await navigator.clipboard.writeText(text);
    console.log('Text copied ' + text);
  }

  const editDesc = dataDesc => {
    fetch('https://group.ithub.software:5000/api/specialties/user/' + cookiesUser.id,
      {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': "application/json"
        },
        body: JSON.stringify({ "name": dataDesc })
      })
      .then(response => response.json())
      .then(data => setinfoDesc(data[0]?.name))
      .catch(err => console.log(err))
  }

  const editInformation = () => {
    

    const dataInfo = {
      name: Name,
      role: cookiesUser.role,
      picture: cookiesUser.picture,
      portfolio: cookiesUser.portfolio,
      telephone: Telephone,
      telegram_name: cookiesUser.telegram_name,
      email: Email,
      telegram_id: cookiesUser.telegram_id,
      roadmap: cookiesUser.roadmap
    }

    fetch("https://group.ithub.software:5000/api/users/" + cookiesUser.id, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': "application/json"
      },
      body: JSON.stringify(dataInfo)
    })
      .then(response => response.json())
      .then(data => cookie.set('user', data, { path: '/' }))
      .catch(err => console.log(err))
  }

  return (
    <>
      <div className='userInfoContainer'>
        <div>
          <div className='information'>
            <div>
              <div className='userImg'>
                <img src={GroFile} alt="avatar" />
              </div>
              <div className='contact'>
                <div className='userNameContact'>
                  {editInfo ?
                    <input type="text" value={Name} name="name" onChange={e => { setName(e.target.value) }} /> :
                    <p>{Name}</p>}
                </div>
                <div className='userContact'>
                  <div className='Telegram'>
                    <img src={telegramLogo} alt="telegram" />
                      <button onClick={() => copy("https://t.me/" + cookiesUser.telegram_name)}>{cookiesUser.telegram_name}</button>
                  </div>
                  <div className='email'>
                    {editInfo ?
                      <><img src={emailLogo} alt="email" />
                      <input type="text" value={Email} name="email " onChange={e => { setEmail(e.target.value) }} /></> :
                      <>{Email === null || Email === "" ? "" : <img src={emailLogo} alt="email" />}<button onClick={() => copy(Email)}>{Email}</button></>}
                  </div>
                  <div className='telefone'>
                    {editInfo ?
                    <><img src={tellogo} alt="telegram" />
                    <input type="text" value={Telephone} name="tel" onChange={e => { setTelephone(e.target.value) }} /></>:
                      <>{Telephone === null || Telephone === "" ? "" : <img src={tellogo} alt="telegram" />}<button onClick={() => copy(Telephone)}>{Telephone}</button></>}
                  </div>
                </div>
              </div>
            </div>
            {editInfo ?
              <img src={TickIcon} alt="Check Button" onClick={() => { seteditInfo(false); editDesc(infoDesc); editInformation() }} /> :
              <img src={EditButton} alt='edit button' onClick={() => { seteditInfo(true) }} />}
          </div>
          <div className='userDescription'>
            {editInfo ?
              <><textarea value={infoDesc} onChange={e => { setinfoDesc(e.target.value) }} />
              </> : <div>{infoDesc}</div>}
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
