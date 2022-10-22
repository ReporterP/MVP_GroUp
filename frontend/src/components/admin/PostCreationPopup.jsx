import React from 'react';
import { Animated } from 'react-animated-css';
import PostTypeSelector from './PostTypeSelector';
import TagSelector from './TagSelector';

const PostCreation = (props) => {
  const setPopupOpened = props.setPopupOpened;

  const picture = '';

  return (
    <div className={'postCreationPopup'}>
      <Animated animationIn="bounceInUp" animationOut='bounceInDown' isVisible={true}>
        <div>
          <div className={'content'}>
            <div className={'flex flexSpaceBetween topBar'}>
              <button className={'voidButton'} onClick={() => setPopupOpened(false)}>
                Отменить
              </button>

              <button className={'greenButton'} onClick={() => console.log('Опубликовать!')}>
                Опубликовать
              </button>
            </div>
          
            <div className='pictureSetArea' style={{backgroundImage: picture}}>
              { picture !== '' ? '' :
                  <span>У вашего поста нет обложки</span>
              }
              <button className='uploadPictureBtn' />
            </div>

            <PostTypeSelector />

            <div className="inputs">
              <input placeholder='Название' type="text" />

              <TagSelector />

              <textarea placeholder='Описание' cols="30" rows="15" />
            </div>
          </div>
        </div>
      </Animated>
    </div>
  );
}

export default PostCreation;
