import React, { useState, useMemo, useEffect } from 'react';
import ViewPost from './ViewPost';
import Cookies from 'universal-cookie';

const Post = props => {
  const id = props.id
  var typeStyle = {backgroundColor: props.type==="Мероприятие"?"#24D756"
  :props.type==="Вакансия"?"#7C91FF"
  :props.type==="Новость"?"#FFBD70"
  :"#B9B9B9"}
  var tagStyle = {}
  const [isOpen, setIsOpen] = useState(false)
  const [isLike, setIsLike] = useState(props.like.length !== 0?"Записан":"Записаться")

  const cookies = useMemo(() => new Cookies(), []);

  const dataUserID = useMemo(() => cookies.get("user").id, [cookies])

  const showLike =  async () => {
    try {
      const result = await fetch('https://group.ithub.software:5000/api/users/likeposts/' + dataUserID) 
      const data = await result.json()
      setIsLike(data.map(e=>e.id).indexOf(id) !== -1 
      ? "Записан" 
      : "Записаться");
    } catch (err) {
      console.log(err);
    }
  }

  const funcLike = () => {
      console.log(isLike)
      var data = {
          "user_like_id": dataUserID,
          "post_like_id": id,
      }
  
      isLike === "Записан" ? 
      fetch("https://group.ithub.software:5000/api/posts/like", {
          method: "DELETE",
          headers: { 
              "Access-Control-Allow-Origin": "*", 
              'Content-Type': "application/json"},
          body: JSON.stringify(data)})
      .then(() => showLike())
      .catch(err => console.log(err))

      :fetch("https://group.ithub.software:5000/api/posts/like", {
          method: "POST",
          headers: { 
              "Access-Control-Allow-Origin": "*", 
              'Content-Type': "application/json"}, 
          body: JSON.stringify(data)})
      .then(() => showLike())
      .catch(err => console.log(err));
      }

    // useEffect(showLike, [funcLike]);

  return (
    <><div className='card'>
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
        funcLike={funcLike} />
      }
    </>    
  );
}

export default Post;

