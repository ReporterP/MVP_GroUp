import React, { useState, useEffect } from 'react';
import Cookies from 'universal-cookie';
import telegramLogo from './../../img/Telegram.svg';
import emailLogo from './../../img/Email.svg';
import tellogo from './../../img/Vector.svg';
import EditButton from './../../img/EditButtonIcon.svg';
import TickIcon from './../../img/tickIcon.svg'

const Info = () => {
  var cookie = new Cookies();
  const cookiesUser = cookie.get("user");

  const [filePath, setfilePath] = useState('');
  const [editInfo, seteditInfo] = useState(false);
  const [Name, setName] = useState(cookiesUser.name);
  const [Email, setEmail] = useState(cookiesUser.email);
  const [Telephone, setTelephone] = useState(cookiesUser.telephone);
  const [infoDesc, setinfoDesc] = useState("");
  const [errorTelephone, seterrorTelephone] = useState(false);
  const [errorEmail, seterrorEmail] = useState(false);

  const errorInput = {border: "2px solid red"};

  const getPhoto = () => {
    fetch(`https://api.telegram.org/bot5581523508:AAFf18Gki4uS75Gu2eNKybeoA6wiHruXWz4/getUserProfilePhotos?user_id=${cookiesUser.telegram_id}&limit=1`)
    .then(response => response.json())
    .then(data =>
        fetch(`https://api.telegram.org/bot5581523508:AAFf18Gki4uS75Gu2eNKybeoA6wiHruXWz4/getFile?file_id=${data.result.photos[0][0].file_id}`)
          .then(response => response.json())
          .then(data => setfilePath(data.result.file_path))
          .catch(err => console.log(err)))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetch(`https://group.ithub.software:5000/api/specialties/user/${cookiesUser.id}`)
      .then(response => response.json())
      .then(data => { setinfoDesc(data[0]?.name === undefined ? "" : data[0]?.name) })
      .catch(err => console.log(err))

    getPhoto()
  }, []);

  const copy = async text => {
    await navigator.clipboard.writeText(text);
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
    let checkEmail = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu.test(Email) || Email === '' || Email === null
    let checkTelephone = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/.test(Telephone) || Telephone === '' || Telephone === null
    seterrorEmail(!checkEmail)
    seterrorTelephone(!checkTelephone)
    if (checkEmail && checkTelephone){
      fetch("https://group.ithub.software:5000/api/users/" + cookiesUser.id, {
        method: "PATCH",
        headers: {
          "Access-Control-Allow-Origin": "*",
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          name: Name,
          role: cookiesUser.role,
          picture: cookiesUser.picture,
          portfolio: cookiesUser.portfolio,
          telephone: Telephone,
          telegram_name: cookiesUser.telegram_name,
          email: Email,
          telegram_id: cookiesUser.telegram_id,
          roadmap: cookiesUser.roadmap
        })
      })
      .then(response => response.json())
      .then(data => {cookie.set('user', data, { path: '/' }); seteditInfo(false);})
      .catch(err => console.log(err))
    }
  }

  return (
    <>
      <div className='userInfoContainer'>
        <div>
          <div className='information'>
            <div>
              <div className='userImg' 
              style={
                {backgroundImage: `url(${"https://api.telegram.org/file/bot5581523508:AAFf18Gki4uS75Gu2eNKybeoA6wiHruXWz4/"+filePath})`}
                }></div>

              <div className='contact'>
                <div className='userNameContact'>
                  {editInfo ?
                    <input type="text" placeholder='ФИО' value={Name} name="name" onChange={e => { setName(e.target.value) }} /> :
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
                      <input type="text" placeholder='email' value={Email} name="email" style={errorEmail?errorInput:{}} onChange={e => { setEmail(e.target.value) }} /></> :
                      <>{Email === null || Email === "" ? "" : <img src={emailLogo} alt="email" />}<button onClick={() => copy(Email)}>{Email}</button></>}
                  </div>
                  <div className='telefone'>
                    {editInfo ?
                    <><img src={tellogo} alt="tel" />
                    <input type="text" placeholder='телефон' value={Telephone} name="tel" style={errorTelephone?errorInput:{}} onChange={e => { setTelephone(e.target.value) }} /></>:
                      <>{Telephone === null || Telephone === "" ? "" : <img src={tellogo} alt="telegram" />}<button onClick={() => copy(Telephone)}>{Telephone}</button></>}
                  </div>
                </div>
              </div>
            </div>
            {editInfo ?
              <img src={TickIcon} alt="Check Button" onClick={() => { 
                // eslint-disable-next-line no-undef
                ym(93896111,'reachGoal','click-safe-edit-user-info');
                editDesc(infoDesc); 
                editInformation() }} /> :
              <img src={EditButton} alt='edit button' onClick={() => {
                  // eslint-disable-next-line no-undef
                  ym(93896111,'reachGoal','click-edit-user-info');
                  seteditInfo(true) }} />}
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
