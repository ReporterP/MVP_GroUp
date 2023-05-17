import React from 'react';
import backArrow from '../../img/Back Arrow.svg';
import {Animated} from "react-animated-css";

const ViewPost = props => {
  var typeStyle = {backgroundColor: props.type==="Мероприятие"?"#24D756"
  :props.type==="Вакансия"?"#7C91FF"
  :props.type==="Новость"?"#FFBD70"
  :"#B9B9B9"}
  var tagStyle = {}

  var cardStyle = {
    height: props.picture===""?"339px":"520px"
  }
  var cardPrewStyle = {
    height: props.picture===""?0:"212px"
  }
  var pictureOwningClass = props.picture === "" ? "withoutPicture" : "withPicture"

  return (
  <div className='viewContainer'>
    <div>
      <div className='closeSpace' onClick={()=>{props.open(false)}}></div>
      <Animated animationIn="bounceInUp" animationOut='bounceInDown' isVisible={true}>
        <div className={'viewPost ' + pictureOwningClass} style={cardStyle}>
          <button className='backButton' onClick={()=>{props.open(false)}}>
            <img src={backArrow} alt="back arrow" />
          </button>
          <div className='status' style={typeStyle}>{props.type}</div>
          <div className='cardPrew' style={cardPrewStyle}>
            <img src={props.picture} alt="" />
          </div>
          <div className='viewCardContent'>
            <div className='viewCardText cardText'>
              <h5>{props.title}</h5>
              <div className='tags'>
                {
                  props.tag_id?.map(e=><div className='tag' style={{backgroundColor: e.color}}>{e.tag}</div>)
                }
              </div>
              <p>{props.text}</p>
              <div className='viewCardButtons'>
                <button className='viewCheck' onClick={props.funcLike}>{props.isLike}</button>
              </div>
            </div>
          </div>
        </div>
      </Animated>
    </div>
  </div>
  );
}

export default ViewPost;

// 