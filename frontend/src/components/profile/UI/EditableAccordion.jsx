import React, { useState } from 'react';
import AccordionArrow from '../../../img/accordionArrow.svg';
import starFilled from '../../../img/starFilled.png'
import starOutlined from '../../../img/starOutlined.png'
import ModeContext from "../ModeContext";
import TrashIcon from '../../../img/Trash.svg'

function autoHeight(e) {  /* javascript */
  e.target.style.height = "1px";
  e.target.style.height = (e.target.scrollHeight)+"px";
}

const range = (size) =>
  [...Array(size).keys()];

const SkillAccordion = (props) => {
  const color       = props.color
  const text        = props.text
  const starsCount  = props.starsCount
    const maxStars  = 5
  const description = props.children
  const mode        = React.useContext(ModeContext)

  const [textState, setTextState] = useState(text)
  const [descriptionState, setDescriptionState] = useState(description)
  const [starsCountState, setStarsCountState] = useState(starsCount)
  const [isClosed, setIsClosed] = React.useState(true)
  
  const isClosedClass = () => isClosed ? '' : ' closed'
  const isEditingClass = () => mode ? ' editing' : ''

  const stopPropagation = (e) => {
    e.stopPropagation(true)
    e.nativeEvent.stopImmediatePropagation()
  }

  const handleSetStarsCount = (e, x) => {
    stopPropagation(e)
    setStarsCountState(x+1)
  }

  return (
    <div className={"editableAccordionRow" + isEditingClass()}>
      <div onClick={() => setIsClosed(!isClosed && !mode)}
          className={'editableAccordion' + isClosedClass()}
          style={{backgroundColor: color}}>
        
        <span className='accordionArrow'>
          <img src={AccordionArrow} />
        </span>

        {
          !mode ?
            <span className='accordionText'>{textState}</span> :
            <input className='accordionText' type='text' value={textState} onChange={e => setTextState(e.target.value)} />
        }

        <span className='stars'>
          {
            !mode ?
              range(maxStars).map(x =>
                <img src={x < starsCountState ? starFilled : starOutlined} />
              ) :
              range(maxStars).map(x =>
                <img src={x < starsCountState ? starFilled : starOutlined} onClick={e => handleSetStarsCount(e, x)} />
              )
          }
        </span>

        <div className='description'>
          {!mode ?
            <span className='accordionDescription'>{descriptionState}</span> :
            <textarea
              rows={1}
              type='text'
              value={descriptionState}
              className='accordionDescription'
              onInput={autoHeight}
              onChange={e => setDescriptionState(e.target.value)} />
          }
        </div>
      </div>
      
      <div className="deleteBtn">
        {!mode ? '' :
                <img src={TrashIcon} alt="кнопка удаления" />
              }
      </div>
    </div>
  )
}

export default SkillAccordion