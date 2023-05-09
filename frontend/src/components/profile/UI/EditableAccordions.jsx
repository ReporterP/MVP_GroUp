import React from 'react';
import EditableAccordion from "./EditableAccordion"

const EditableAccordions = props => {
    return (
        <div className="accordions">
            {props.accordsState?.map((accord, el) =>
                props.typeArea === "hard" ? <>
                    <EditableAccordion el={el} type={"hard"}
                        color={props.color} text={accord.hard}
                        starsCount={accord.level_edu} setNewAccord={props.setNewAccord}
                        newAccord={props.accordsState} deleteAccordElem={props.deleteAccordElem}>
                        {accord.description}
                    </EditableAccordion>
                </> :
                    props.typeArea === "soft" ? <>
                        <EditableAccordion el={el} type={"soft"}
                            color={props.color} text={accord.soft}
                            starsCount={accord.level_edu} setNewAccord={props.setNewAccord}
                            newAccord={props.accordsState} deleteAccordElem={props.deleteAccordElem}>
                            {accord.description}
                        </EditableAccordion>
                    </> : 0)}
        </div>
    );
}

export default EditableAccordions
