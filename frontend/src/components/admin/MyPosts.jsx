import React, {useEffect, useState} from 'react';
import Posts from '../posts/Posts';
import Cookies from 'universal-cookie';


const MyPosts = () => {
  const cookies = new Cookies()
  const dataUserID = cookies.get("user").id

  const [adminPosts, setadminPosts] = useState([]);
  const [postLike, setPostLike] = useState([]);

  const showLike = () => {
    fetch('https://group.ithub.software:5000/api/users/likeposts/' + dataUserID)
        .then(response => response.json())
        .then(data => {
            data = data?.map(e => e.id);
            setPostLike(data);
            getAdminPost()
        })
        .catch(err => console.log(err))
}

  const getAdminPost = () => {
    fetch('https://group.ithub.software:5000/api/users/posts/' + dataUserID)
    .then(response => response.json())
    .then(data => setadminPosts(data))
    .catch(err => setadminPosts([{
        type: "Ошибка",
        picture: '',
        title: `ошибка загрузки постов`,
        tag_id: [],
        text: ""
    }]))
  }

  useEffect(showLike, []);

  return (
    <div id='myPosts'>
      <h3>Мои посты</h3>

      <div className="scrollable scroll_admin">
        <Posts cards={adminPosts} likes={postLike} withPaddingTop={false} />
      </div>
    </div>
  );
}

export default MyPosts;
