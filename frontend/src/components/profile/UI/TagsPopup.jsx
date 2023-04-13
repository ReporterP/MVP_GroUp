import React, { useState, useEffect } from 'react';
import { Animated } from "react-animated-css";
import TagMenuItem from './TagMenuItem.jsx';
import Cookies from 'universal-cookie';

const TagsPopup = props => {

    var cookie = new Cookies();
    const cookiesUser = cookie.get("user")
    const [Tags, setTags] = useState([]);
    const [addTagInput, setaddTagInput] = useState("");

    const getTags = () => {
        fetch('https://group.ithub.software:5000/api/tags-user/user/' + cookiesUser.id)
            .then(response => response.json())
            .then(data => setTags(data))
            .catch(err => console.log(err))
    }

    const patchTags = () => {
        let tags = Tags.map(e => e.tag)
        if (addTagInput !== ""){tags.push(addTagInput)}
        fetch('https://group.ithub.software:5000/api/tags-user/user/' + cookiesUser.id,
            {
                method: "PATCH",
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({"tags": tags})
            })
            .then(response => response.json())
            .then(data =>{ console.log(data);getTags()})
            .catch(err => console.log(err))
    }
    
    useEffect(getTags, [])

    return (
        <div className='viewContainer'>
            <div>
                <div className='closeSpace' onClick={() => { props.open(false) }} style={{ height: "100vh" }}></div>
                <Animated animationIn="bounceInUp" animationOut='bounceInDown' isVisible={true}>
                    <div className='tagsPopup'>
                        <div className='topBar'>
                            <span onClick={() => { props.open(false) }}>Отменить</span>
                            <button onClick={() => {patchTags(); props.open(false)}}>Сохранить</button>
                        </div>
                        <div className='addTag'>
                            <input type="text" value={addTagInput} onChange={e => { setaddTagInput(e.target.value) }}/>
                            <button className='addTagButton' onClick={patchTags}>Добавить тег</button>
                        </div>
                        <div className='tagsList'>
                            {Tags.map(t =>
                                <div key={t.id}>
                                    <TagMenuItem infoTag={t} Tags={Tags} setTags={setTags} getTags={getTags}/>
                                </div>
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