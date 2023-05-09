import React, { useState, useEffect } from "react"
import EditableAccordions from "./UI/EditableAccordions"
import EditButtonIcon from '../../img/EditButtonIcon.svg'
import TickIcon from '../../img/tickIcon.svg'
import PlusIcon from '../../img/whitePlusIcon.svg'
import ModeContext from "./ModeContext"

const EditableAccordionsArea = props => {
  const title      = props.title
  const color      = props.color
  const typeArea   = props.area

  const [mode, setMode] = useState(false)
  const [accordsState, setaccordsState] = useState(props.accordions)


  useEffect(()=>{setaccordsState(props.accordions)}, [props.accordions])

  const sendAccord = () => {
    fetch(`https://group.ithub.software:5000/api/${typeArea === "hard"?"resume-hard":typeArea === "soft"?"resume-soft":""}/user/` + props.userid, {
      method: "POST",
      headers: { 
          "Access-Control-Allow-Origin": "*", 
          'Content-Type': "application/json"}, 
      body: JSON.stringify(accordsState)})
      .then(() => console.log(""))
      .catch(err => console.log(err))}

  const addAccord = () => {
    if (typeArea === "hard") {
      setaccordsState(accordsState?.concat({hard: '', level_edu: 0, description: ''}))
    } else if  (typeArea === "soft") {
      setaccordsState(accordsState?.concat({soft: '', level_edu: 0, description: ''}))
    }
  }

  const deleteAccordElem = el => setaccordsState(accordsState?.filter((e,i)=>i!==el))


  return (
    <div className="editableAccordionsArea">
      <ModeContext.Provider value={mode}>
        <div className='accordionsTitle' style={{ color: color }}>
          {title}
          {mode ?
          <img src={TickIcon } alt='кнопка редактирования' onClick={() => { sendAccord(); setMode(!mode) }} />:
          <img src={EditButtonIcon} alt='кнопка редактирования' onClick={() => { setMode(!mode) }} />}
        </div>

        <EditableAccordions typeArea={typeArea} color={color} setNewAccord={setaccordsState} accordsState={accordsState} deleteAccordElem={deleteAccordElem}/>
        
      </ModeContext.Provider>

      {!mode ? '' :
        <div className="accordionAddingBar">
          <button className="accordionAddingBtn voidButton" onClick={addAccord}>
            <img src={PlusIcon} alt='кнопка добавления' />
          </button>
        </div>
      }
    </div>
  )
}

export default EditableAccordionsArea