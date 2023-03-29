import React, {useEffect} from 'react';
import Posts from '../posts/Posts';

const MyPosts = () => {
  // TODO: Доделать на бэке вывод постов сделаных автором
  const getAdminPost = () => {

  }

  useEffect(getAdminPost, []);

  return (
    <div id='myPosts'>
      <h3>Мои посты</h3>

      <div className="scrollable">
        {/* <Posts cards={adminPosts} withPaddingTop={false} /> */}
      </div>
    </div>
  );
}

export default MyPosts;
