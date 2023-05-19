import React, {useEffect, useState, useContext} from 'react';
import Posts from '../posts/Posts';
import Cookies from 'universal-cookie';
import RefreshContext from '../context/RefreshContext';


const MyPosts = () => {
  const {refresh, setrefresh} = useContext(RefreshContext);

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

  useEffect(()=> {
    showLike()
    return () => {
        setrefresh(false)
    }
}, [refresh]);

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
