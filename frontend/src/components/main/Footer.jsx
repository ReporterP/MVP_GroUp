import React, {useState, useContext} from 'react';
import postsActive from '../../img/posts_active.svg';
import grofile from '../../img/profile.svg';
import posts from '../../img/posts.svg';
import grofileActive from '../../img/profile_active.svg'
import RefreshContext from '../context/RefreshContext';

const Footer = props => {

  const {refresh, setrefresh} = useContext(RefreshContext);

  const [link, setlink] = useState("post")

  var post = () => {
    props.post(true)
    props.profile(false)
    setrefresh(true)
    setlink("post")
  }

  var profile = () => {
    props.post(false)
    props.profile(true)
    setrefresh(true)
    setlink("profile")
  }

  const textButton = type => {
    return {color: link===type?"#68E68B":"#fff",fontSize:"7px"}
  }

  return (
    <div>
      <footer>
        <div className="container">
          <button onClick={post}>
            <img src={link==="post"?postsActive:posts} alt="posts" />
            <p style={textButton("post")}>лента</p>
          </button>
          <button onClick={profile}>
            <img src={link==="profile"?grofileActive:grofile} alt="profile" />
            <p style={textButton("profile")}>профиль</p>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
