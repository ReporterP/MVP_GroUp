import React, { useState } from 'react';
import TrashIcon from '../../../img/Trash.svg'

const TagMenuItem = props => {

    const infoTag = props.infoTag

    const [deleteStyle, setdeleteStyle] = useState(false);

    return (
        <div style={{display: deleteStyle?"none":"block"}}>
            <div className='tagsMenuItem' style={{display: deleteStyle?"none":"flex"}}>
                <span style={{backgroundColor: infoTag.color}}> {infoTag.tag} </span>
                <div className='tagEditTools'>
                    <div onClick={() => {
                        // eslint-disable-next-line no-undef
                        ym(93896111,'reachGoal','click-delete-hobby')
                        props.Tags.splice(props.Tags.indexOf(infoTag), 1)
                        props.setTags(props.Tags)
                        setdeleteStyle(true)
                        }}>
                        <img src={TrashIcon} alt="Trash icon" />
                    </div> {/* DeleteButton */}
                </div>
            </div>
            <hr />
        </div>
    )
}

export default TagMenuItem;