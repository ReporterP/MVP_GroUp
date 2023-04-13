import React, { useState, useEffect, useMemo } from 'react';
import Cookies from 'universal-cookie';
import Posts from '../posts/Posts';

const FavoritePost = () => {

  const [postsInfo, setPostsInfo] = useState([]);
  const [postLike, setPostLike] = useState([]);

  const cookies = useMemo(() => new Cookies(), []);
  const dataUserID = useMemo(() => cookies.get("user").id, [cookies])

  const showLike = () => {
    fetch('https://group.ithub.software:5000/api/users/likeposts/' + dataUserID)
      .then(response => response.json())
      .then(data => {
        data = data.map(e => e.id);
        showInfo(data)
        setPostLike(data)
      })
      .catch(err => console.log(err))
  }

  const showInfo = likes => {
    fetch('https://group.ithub.software:5000/api/posts/')
      .then(response => response.json())
      .then(data => {
        data = data.filter(e => likes.indexOf(e.id) * 1 !== -1);
        setPostsInfo(data)
      })
      .catch(err => setPostsInfo([{
        type: "Ошибка",
        picture: '',
        title: `ошибка загрузки постов`,
        tag_id: [],
        text: ""
      }]))
  }

  useEffect(showLike, []);

  return (
    <><Posts cards={postsInfo} likes={postLike} withPaddingTop={false} /></>
  );
}

export default FavoritePost;
