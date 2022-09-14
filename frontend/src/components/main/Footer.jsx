import React, {useState} from 'react';
import postsActive from '../../img/posts_active.svg';
import grofile from '../../img/profile.svg';
import posts from '../../img/posts.svg';
import grofileActive from '../../img/profile_active.svg'

const Footer = props => {
  const [link, setlink] = useState("post")

  var post = () => {
    props.post(true)
    props.profile(false)
    setlink("post")
  }

  var profile = () => {
    props.post(false)
    props.profile(true)
    setlink("profile")
  }

  return (
    <div>
      <footer>
        <div className="container">
          <button onClick={post}>
            <img src={link==="post"?postsActive:posts} alt="posts" />
          </button>
          <button onClick={profile}>
            <img src={link==="profile"?grofileActive:grofile} alt="profile" />
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
