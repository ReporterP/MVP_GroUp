import React from "react"
import EditableAccordion from "./UI/EditableAccordion"
import EditButtonIcon from '../../img/EditButtonIcon.svg'
import TickIcon from '../../img/tickIcon.svg'
import PlusIcon from '../../img/whitePlusIcon.svg'
import ModeContext from "./ModeContext"

const EditableAccordionsArea = (props) => {
  const title   = props.title
  const color   = props.color
  const accords = props.accordions

  const [mode, setMode] = React.useState(false)
  const [accordsState, setAccordsState] = React.useState(accords)

  const addAccord = () => {
    setAccordsState(accordsState.concat(
      {
        title: '',
        level_edu: 0,
        description: ''
      }
    ))
  }

  return (
    <div className="editableAccordionsArea">
      <ModeContext.Provider value={mode}>
        <div className='accordionsTitle' style={{color: color}}>
          {title}

          <img src={mode ? TickIcon : EditButtonIcon} alt='кнопка редактирования' onClick={() => setMode(!mode)} />
        </div>

        <div className="accordions">
          {accordsState.map(accord => <>
            <EditableAccordion color={color} hard={accord.hard} level_edu={accord.level_edu}>
              {accord.description}
            </EditableAccordion>
          </>)}
        </div>
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