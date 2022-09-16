import React, { useState } from 'react';
import backArrow from '../../../img/Back Arrow.svg';
import {Animated} from "react-animated-css";

const TagsPopup = props => {
    return (
        <div className='viewContainer'>
            <div>
                <div className='closeSpace' onClick={()=>{props.open(false)}} style={{height: "100vh"}}></div>
                    <Animated animationIn="bounceInUp" animationOut='bounceInDown' isVisible={true}>
                        <div className={'viewPost'}>
                            <button className='backButton' style={{marginTop: "10px"}} onClick={()=>{props.open(false)}}>
                                <img src={backArrow} alt="back arrow" />
                            </button>
                        <div className='status'>...</div>
                        <div className='viewCardContent'>
                            <div className='viewCardText cardText' style={{marginTop: "40px"}}>
                                <h5>Тэги</h5>
                                <p>...</p>
                                <div className='viewCardButtons'>
                                    <button className='viewCheck'>Я приду!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Animated>
            </div>
        </div>
            // <div className='tagsPopup'>
            //     <div className='topBar'>
            //         <span onClick={()=>{props.open(false)}}>Отменить</span>
            //         <button>Сохранить</button>
            //     </div>

            //     <button className='addTagButton'>Добавить тег</button>

            //     <div className='tagsList'>
            //         {/* ... */}
            //         <div>
            //             <span> {/* TagName */} </span>
            //             <div>
            //                 <div></div> {/* ColorPicker */}
            //                 <div></div> {/* DeleteButton */}
            //             </div>
            //         </div>

            //         <hr />
            //         {/* ... */}
            //     </div>
            // </div>
    )
}

export default TagsPopup;