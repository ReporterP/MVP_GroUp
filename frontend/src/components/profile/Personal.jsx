import React from 'react';
import ProfileTags from './UI/ProfileTags';
import Roadmap from './UI/Roadmap';
import EditButton from './../../img/EditButtonIcon.svg';

const Personal = () => {
  return (
    <div className='personal'>
      <div className='flex flexSpaceBetween flexItemsCenter'>
        <h6>Интересы</h6>
        <img src={EditButton} alt='edit button' />
      </div>
      <ProfileTags/>
      <h6>Роадмап</h6>
      <Roadmap/>
    </div>
  );
}

export default Personal;
