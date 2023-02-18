import React, { useState, useEffect } from 'react';
import ViewPost from './ViewPost';
import Cookies from 'universal-cookie';
import axios from 'axios';

const Post = props => {
  var typeStyle = {backgroundColor: props.type==="Мероприятие"?"#24D756":""}
  var tagStyle = {}

  const [isOpen, setIsOpen] = useState(false)
  const [postLike, setPostLike] = useState([]);
  const [likeId, setLikeId] = useState(postLike.indexOf(props.id) !== -1)
  const [isLike, setIsLike] = useState(likeId?"Записан":"Записаться")


  const cookies = new Cookies();

  useEffect(() => {
    axios.get('http://185.12.94.221:5000/api/users/likeposts/' + cookies.get("user").id, {
      headers: { 
          "Access-Control-Allow-Origin": "*", 
          'Content-Type': "application/json" 
      }}).then(res => setPostLike(res.data.map(e=>e.id)))
      .catch(err => console.log(err));
  }, []);


  function funcLike () {
      console.log(likeId)
      var data = {
          "user_like_id": cookies.get("user").id,
          "post_like_id": props.id,
      }
  
      likeId? axios.delete("http://185.12.94.221:5000/api/posts/like",  {
          data: data,
          headers: { 
              "Access-Control-Allow-Origin": "*", 
              'Content-Type': "application/json" 
      }}).then(res => console.log(res.data)).catch(err => console.log(err))

      :axios.post("http://185.12.94.221:5000/api/posts/like", data, {
          headers: { 
              "Access-Control-Allow-Origin": "*", 
              'Content-Type': "application/json" 
          }}).then(res => console.log(res.data)).catch(err => console.log(err));

      axios.get('http://185.12.94.221:5000/api/users/likeposts/' + cookies.get("user").id, {
          headers: { 
              "Access-Control-Allow-Origin": "*", 
              'Content-Type': "application/json" 
          }}).then(res => setPostLike(res.data.map(e=>e.id)))
          .catch(err => console.log(err));

      console.log(postLike);
      
      setLikeId(postLike.indexOf(props.id) !== -1);
      console.log(likeId)
      setIsLike(likeId?"Записан":"Записаться");
      }



  // var cardPrewStyle = {
  //   height: props.picture===""?0:"188px"
  // }


  return (
    <>
      <div className='card' key={props.id}>
      <div className='status' style={typeStyle}>{props.type}</div>
        <div className='cardPrew'>
          <img src={props.picture} alt="" />
        </div>
        <div className='cardContent'>
          <div className='cardText'>
            <h5>{props.title}</h5>
            <div className='tags'>
              {
                props.tag_id.map(e=>{
                tagStyle = {backgroundColor: e[1]}
                return <div className='tag' style={tagStyle}>{e[0]}</div>
              })
              }
            </div>
            <p>{props.text.substring(0, 145) + '...'}</p>
            <div className='cardButtons'>
              <button className='check' onClick={funcLike}>{isLike}</button>
              <button className='view' onClick={()=>{setIsOpen(true)}}>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && 
        <ViewPost 
        open={setIsOpen} 
        type={props.type}
        picture={props.picture} 
        title={props.title} 
        tag_id={props.tag_id} 
        text={props.text}
        isLike={isLike}
        funcLike={props.funcLike} />
      }
    </>    
  );
}

export default Post;

