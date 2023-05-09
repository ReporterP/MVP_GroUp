import React, { useState, useEffect } from 'react';
import AccordionArrow from '../../../img/accordionArrow.svg';
import starFilled from '../../../img/starFilled.png'
import starOutlined from '../../../img/starOutlined.png'
import ModeContext from "../ModeContext";
import TrashIcon from '../../../img/Trash.svg'

const autoHeight = e => {
  e.target.style.height = "1px";
  e.target.style.height = (e.target.scrollHeight) + "px";
}

const range = size => [...Array(size).keys()]

const EditableAccordion = props => {
  const maxStars = 5
  const mode = React.useContext(ModeContext)
  const type = props.type

  const [textState, setTextState] = useState(props.text)
  const [descriptionState, setDescriptionState] = useState(props.children)
  const [starsCountState, setStarsCountState] = useState(props.starsCount)
  const [isClosed, setIsClosed] = React.useState(true)

  const isClosedClass = () => isClosed ? '' : ' closed'
  const isEditingClass = () => mode ? ' editing' : ''

  const stopPropagation = (e) => {
    e.stopPropagation(true)
    e.nativeEvent.stopImmediatePropagation()
  }

  const handleSetStarsCount = (e, x) => {
    stopPropagation(e)
    setStarsCountState(x + 1)
  }

  useEffect(() => {
    if (type === "hard") {
      props.newAccord[props.el] = {
        hard: textState,
        level_edu: starsCountState,
        description: descriptionState,
      }
      props.setNewAccord(props.newAccord)
    } else if (type === "soft") {
      props.newAccord[props.el] = {
        soft: textState,
        level_edu: starsCountState,
        description: descriptionState,
      }
      props.setNewAccord(props.newAccord)
    }
  }, [descriptionState, starsCountState, textState]);

  useEffect(() => {
    setTextState(props.text)
    setDescriptionState(props.children)
    setStarsCountState(props.starsCount)
  }, [props])

  return (
    <div className={"editableAccordionRow" + isEditingClass()}>
      <div onClick={() => setIsClosed(!isClosed && !mode)}
        className={'editableAccordion' + isClosedClass()}
        style={{ backgroundColor: props.color }}>

        <span className='accordionArrow'>
          <img src={AccordionArrow} alt='arrow' />
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
                <img src={x < starsCountState ? starFilled : starOutlined} alt='stars' />
              ) :
              range(maxStars).map(x =>
                <img src={x < starsCountState ? starFilled : starOutlined} onClick={e => handleSetStarsCount(e, x)} alt='stars' />
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
          <button onClick={() => props.deleteAccordElem(props.el)}>
            <img src={TrashIcon} alt="кнопка удаления" />
          </button>
        }
      </div>
    </div>
  )
}

export default EditableAccordion