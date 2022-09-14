import React from 'react';
import backArrow from '../../img/Back Arrow.svg';
import {Animated} from "react-animated-css";

const ViewPost = props => {
  var statusStyle = {backgroundColor: props.status[0]}
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
          <div className='status' style={statusStyle}>{props.status[1]}</div>
          <div className='cardPrew' style={cardPrewStyle}>
            <img src={props.picture} alt="" />
          </div>
          <div className='viewCardContent'>
            <div className='viewCardText cardText'>
              <h5>{props.name}</h5>
              <div className='tags'>
                {
                  props.tags.map(e=>{
                    tagStyle = {backgroundColor: e[1]}
                    return <div className='tag' style={tagStyle}>{e[0]}</div>
                  })
                }
              </div>
              <p>{props.description}</p>
              <div className='viewCardButtons'>
                <button className='viewCheck'>Я приду!</button>
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