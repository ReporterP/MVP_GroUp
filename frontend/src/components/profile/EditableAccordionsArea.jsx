import React, { useState, useEffect } from "react"
import EditableAccordion from "./UI/EditableAccordion"
import EditButtonIcon from '../../img/EditButtonIcon.svg'
import TickIcon from '../../img/tickIcon.svg'
import PlusIcon from '../../img/whitePlusIcon.svg'
import ModeContext from "./ModeContext"

const EditableAccordionsArea = props => {
  const title    = props.title
  const color    = props.color
  const typeArea = props.area

  const [mode, setMode] = useState(false)
  const [accordsState, setAccordsState] = useState([])
  const [addNewAccord, setaddNewAccord] = useState([]);


  const sendAccord = () => {
    let sendAccords = addNewAccord.map((e)=>{
      accordsState[e.id-1] = e
    })

    console.log(sendAccords);
  }


  const addAccord = () => {
    if (typeArea === "hard") {
      setAccordsState(accordsState.concat({id: accordsState.length + 1, hard: '', level_edu: 0, description: ''}))
      setaddNewAccord(addNewAccord?.concat({id: accordsState.length + 1, hard: '', level_edu: 0, description: ''}))
    } else if  (typeArea === "soft") {
      setAccordsState(accordsState.concat({id: accordsState.length + 1, soft: '', level_edu: 0, description: ''})) 
      setaddNewAccord(addNewAccord?.concat({id: accordsState.length + 1, soft: '', level_edu: 0, description: ''}))
    } else if (typeArea === "workExp") {
      setAccordsState(accordsState.concat({id: accordsState.length + 1, profession: '', work_time: "",description: ''}))
      setaddNewAccord(addNewAccord?.concat({id: accordsState.length + 1, profession: '', work_time: "",description: ''}))
    }
  }

  useEffect(() => { setAccordsState(props.accordions) }, [props.accordions]);

  console.log(accordsState)
  console.log(addNewAccord)

  return (
    <div className="editableAccordionsArea">
      <ModeContext.Provider value={mode}>
        <div className='accordionsTitle' style={{ color: color }}>
          {title}
          {mode ?
          <img src={TickIcon } alt='кнопка редактирования' onClick={() => { sendAccord(); setMode(!mode) }} />:
          <img src={EditButtonIcon} alt='кнопка редактирования' onClick={() => { setMode(!mode) }} />}
        </div>

        <div className="accordions">
          {accordsState.map(accord => typeArea === "hard" ? <>
            <EditableAccordion id={accord.id} type={"hard"} color={color} text={accord.hard} starsCount={accord.level_edu} setNewAccord={setaddNewAccord} newAccord={addNewAccord}>
              {accord.description}
            </EditableAccordion>
          </> : typeArea === "soft" ? <>
            <EditableAccordion id={accord.id} type={"soft"} color={color} text={accord.soft} starsCount={accord.level_edu} setNewAccord={setaddNewAccord}>
              {accord.description}
            </EditableAccordion>
          </> : typeArea === "workExp" ? <>
            <EditableAccordion id={accord.id} type={"workExp"} color={color} text={accord.profession} starsCount={accord.work_time} setNewAccord={setaddNewAccord}>
              {accord.description}
            </EditableAccordion>
          </> : 0)}
        </div>
      </ModeContext.Provider>

      {!mode ? '' :
        <div className="accordionAddingBar">
          <button className="accordionAddingBtn voidButton" onClick={() => addAccord()}>
            <img src={PlusIcon} alt='кнопка добавления' />
          </button>
        </div>
      }
    </div>
  )
}

export default EditableAccordionsArea