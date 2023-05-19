import React, {useState, useContext} from 'react';
import Cookies from 'universal-cookie';
import { Animated } from 'react-animated-css';
import PostTypeSelector from './PostTypeSelector';
import closeIcon from '../../img/whitePlusIcon.svg';
import RefreshContext from '../context/RefreshContext';

const PostCreation = (props) => {
  const {refresh, setrefresh} = useContext(RefreshContext);

  const setPopupOpened = props.setPopupOpened;
  var cookie = new Cookies();
  const cookiesUser = cookie.get("user")
  const [valueSelector, setvalueSelector] = useState('')

  const picture = '';

  const typeObj = {
    "vacancy": "Вакансия",
    "event": "Мероприятие",
    "news": "Новость"
  }

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target)
    
    const sendPost = {
      type:    typeObj[valueSelector],
      title:   data.get("title"),
      text:    data.get("text"),
      picture: picture,
      user_id: cookiesUser.id*1,
      tags:    data.get("tags") === ""?data.get("tags"):data.get("tags").split(" "),
    }

    console.log(sendPost.type)
    if (sendPost.type !== undefined && sendPost.title !== "") {
      fetch("https://group.ithub.software:5000/api/posts", {
        method: "POST",
        headers: { 
            "Access-Control-Allow-Origin": "*", 
            'Content-Type': "application/json"},
        body: JSON.stringify(sendPost)})
      .then(() => {
        setPopupOpened(false);
        setrefresh(true)})
      .catch(err => console.log(err))
    }
  }

  return (
    <div className='postCreationPopup'>
      <Animated animationIn="bounceInUp" animationOut='bounceInDown' isVisible={true}>
        <form onSubmit={handleSubmit}>
          <div className='content'>
            <div className='flex flexSpaceBetween topBar'>
              <button className='voidButton' onClick={() => setPopupOpened(false)}>
                <img src={closeIcon} className='closeIcon' alt="close"></img>
              </button>

              <button className='greenButton' type='submit'>
                Опубликовать
              </button>
            </div>
          
            {/* <div className='pictureSetArea' style={{backgroundImage: picture}}>
              { picture !== '' ? '' :
                  <span>У вашего поста нет обложки</span>
              }
              <button className='uploadPictureBtn' />
            </div> */}

            <PostTypeSelector setvalueSelector={setvalueSelector} valueSelector={valueSelector}/>

            <div className="inputs">
              <input name="title" placeholder='Название' type="text" />

              <input name="tags" type="text" placeholder='Введите теги для поста через пробел'/>

              <textarea name="text" placeholder='Описание' cols="30" rows="15" />
            </div>
          </div>
        </form>
      </Animated>
    </div>
  );
}

export default PostCreation;
