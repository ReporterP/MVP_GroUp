import React, { useState, useMemo } from 'react';
import ViewPost from './ViewPost';
import Cookies from 'universal-cookie';

const Post = props => {
  const id = props.id
  console.log(props.tag_id)

  var typeStyle = {
  backgroundColor: props.type==="Мероприятие"?"#24D756"
  :props.type==="Вакансия"?"#7C91FF"
  :props.type==="Новость"?"#FFBD70":"#B9B9B9"}

  const [isOpen, setIsOpen] = useState(false)
  const [isLike, setIsLike] = useState(props.like.length !== 0?"Записан":"Записаться")

  const cookies = useMemo(() => new Cookies(), [])
  const dataUserID = useMemo(() => cookies.get("user").id, [cookies])

  const showLike =  async () => {
    try {
      const result = await fetch('https://group.ithub.software:5000/api/users/likeposts/' + dataUserID) 
      const data = await result.json()
      setIsLike(data.map(e=>e.id).indexOf(id) !== -1 ? "Записан" : "Записаться");
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
      
      fetch("https://group.ithub.software:5000/api/posts/like", {
          method: isLike === "Записан"?"DELETE":"POST",
          headers: { 
              "Access-Control-Allow-Origin": "*", 
              'Content-Type': "application/json"},
          body: JSON.stringify(data)})
      .then(() => showLike())
      .catch(err => console.log(err))
      }

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
              {props.tag_id?.map(e=><div className='tag' style={{backgroundColor: e.color}}>{e.tag}</div>)}
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

export default Post