import { React, useState } from 'react';
import ProfileTags from './UI/ProfileTags';
// import Roadmap from './UI/Roadmap';
import EditButton from './../../img/EditButtonIcon.svg';
import TagsPopup from './UI/TagsPopup';

const Personal = () => {

  const [tagsPopupOpened, setTagsPopupOpened] = useState(false)

  return (
    <>
    <div className='personal'>
      <div className='flex flexSpaceBetween flexItemsCenter'>
        <h6>Интересы</h6>
        <img src={EditButton} alt='edit button' onClick={()=>{
          // eslint-disable-next-line no-undef
          ym(93896111,'reachGoal','click-edit-button-hobby');
          setTagsPopupOpened(true)}} />
      </div>
      <ProfileTags update={tagsPopupOpened}/>
      {/* <h6>Роадмап</h6> */}
      {/* <Roadmap/> */}

    </div>
    {tagsPopupOpened && 
      <TagsPopup
      open={setTagsPopupOpened}
      />
    }
    </>
  );
}

export default Personal;
