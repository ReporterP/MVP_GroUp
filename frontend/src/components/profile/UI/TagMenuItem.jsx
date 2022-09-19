import TrashIcon from '../../../img/Trash.svg'

const TagMenuItem = props => {
    return (
        <div className='tagsMenuItem'>
            <span style={{backgroundColor: props.color}}> {props.title} </span>
            <div className='tagEditTools'>
                <div
                    onClick={() => console.log('change color')}
                    className='colorPicker'
                    style={{backgroundColor: props.color}}
                />
                <div onClick={() => console.log('delete')}>
                    <img src={TrashIcon} alt="Trash icon" />
                </div> {/* DeleteButton */}
            </div>
        </div>
    )
}

export default TagMenuItem;