import React from 'react';
import ProfileTags from './UI/ProfileTags';
import Roadmap from './UI/Roadmap';

const Personal = () => {
  return (
    <div className='personal'>
      <h6>Интересы</h6>
      <ProfileTags/>
      <h6>Роадмап</h6>
      <Roadmap/>
    </div>
  );
}

export default Personal;
