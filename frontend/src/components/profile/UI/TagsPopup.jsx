import React from 'react';
import { Animated } from "react-animated-css";
import TagMenuItem from './TagMenuItem.jsx';

const TagsPopup = props => {

    const tagsArray = [
        {
            title: 'React',
            color: '#f272de'
        },
        {
            title: 'React',
            color: '#f272de'
        },
        {
            title: 'React',
            color: '#f272de'
        }
    ]


    return (
        <div className='viewContainer'>
            <div>
                <div className='closeSpace' onClick={()=>{props.open(false)}} style={{height: "100vh"}}></div>
                <Animated animationIn="bounceInUp" animationOut='bounceInDown' isVisible={true}>
                    <div className='tagsPopup'>
                        <div className='topBar'>
                            <span onClick={()=>{props.open(false)}}>Отменить</span>
                            <button>Сохранить</button>
                        </div>

                        <button className='addTagButton'>Добавить тег</button>

                        <div className='tagsList'>
                            {tagsArray.map(t =>
                                <>
                                <TagMenuItem
                                    title={t.title}
                                    color={t.color}
                                />
                                <hr />
                                </>
                            )}
                        </div>
                    </div>
                </Animated>
            </div>
        </div>
            // <div className='tagsPopup'>
                
            // </div>
    )
}

export default TagsPopup;