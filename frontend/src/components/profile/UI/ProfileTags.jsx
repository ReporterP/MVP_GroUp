import React from 'react';

const ProfileTags = () => {
    var tags = {tags:[
        {color: "#F272DE", name: "Тег"},
        {color: "#68B9E6", name: "ТегТегТег"},
        {color: "#68E68B", name: "Тег"},
        {color: "#A484FF", name: "ТегТегТегТегТегТегТегТег"},
        {color: "#F272DE", name: "Тег"},
        {color: "#68B9E6", name: "Тег"},
        {color: "#68E68B", name: "ТегТегТегТег"},
        {color: "#A484FF", name: "Тег"},
    ]}

    return (
        <div className='tags'>
            {
                tags.tags.map(e=><div style={{backgroundColor: e.color}}>{e.name}</div>)
            }
            <div className='addTag'>Добавить тег</div>
        </div>
    );
}

export default ProfileTags;
