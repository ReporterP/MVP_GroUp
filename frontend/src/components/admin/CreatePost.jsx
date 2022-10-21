import React from 'react';
import { Animated } from "react-animated-css";

const CreatePost = () => {
  const [popupOpened, setPopupOpened] = React.useState(false);

  return (
    <>
      <button
          id='createPostBtn'
          className='greenButton fullWidth'
          onClick={() => setPopupOpened(true)}>
        Создать пост +
      </button>

      {
        !popupOpened ? '' :
          <div className={'postCreationPopup'}>
            <Animated animationIn="bounceInUp" animationOut='bounceInDown' isVisible={true}>
              <div>
                <div className={'content'}>
                  <div className={'flex flexSpaceBetween'}>
                    <button className={'voidButton'} onClick={() => setPopupOpened(false)}>
                      Отменить
                    </button>

                    <button className={'greenButton'} onClick={() => console.log('Опубликовать!')}>
                      Опубликовать
                    </button>
                  </div>
                  Да
                </div>
              </div>
            </Animated>
          </div>
      }
    </>
  );
}

export default CreatePost;
