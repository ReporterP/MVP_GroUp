import React from 'react';
import PostCreationPopup from './PostCreationPopup.jsx';

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
        !popupOpened ? '' : <PostCreationPopup setPopupOpened={setPopupOpened} />
      }
    </>
  );
}

export default CreatePost;
