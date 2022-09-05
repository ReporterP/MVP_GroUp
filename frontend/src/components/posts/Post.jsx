import React, { useState } from 'react';
import ViewPost from './ViewPost';

const Post = props => {
  var statusStyle = {backgroundColor: props.status[0]}
  var tagStyle = {}

  const [isOpen, setIsOpen] = useState(false)

  var cardStyle = {
    height: props.picture===""?"140px":"328px"
  }
  var cardPrewStyle = {
    height: props.picture===""?0:"188px"
  }
  

  return (
    <>
      <div className='card' style={cardStyle}>
      <div className='status' style={statusStyle}>{props.status[1]}</div>
        <div className='cardPrew' style={cardPrewStyle}>
          <img src={props.picture} alt="" />
        </div>
        <div className='cardContent'>
          <div className='cardText'>
            <h5>{props.name}</h5>
            <div className='tags'>
              {
                props.tags.map(e=>{
                tagStyle = {backgroundColor: e[1]}
                return <div className='tag' style={tagStyle}>{e[0]}</div>
              })
              }
            </div>
            <p>{props.description.substring(0, 145) + '...'}</p>
            <div className='cardButtons'>
              <button className='check'>Я приду!</button>
              <button className='view' onClick={()=>{setIsOpen(true)}}>Подробнее</button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && 
        <ViewPost 
        open={setIsOpen} 
        status={props.status}
        picture={props.picture} 
        name={props.name} 
        tags={props.tags} 
        description={props.description} />
      }
    </>
  );
}

export default Post;

