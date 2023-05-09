import React, { useState } from 'react';

const ProfileMenu = props => {
    const [colorMenu, setcolorMenu] = useState("pers")
    var colorPers = {color: colorMenu==="pers"?"#68E68B":"#FFF"}
    var colorFav = {color: colorMenu==="fav"?"#68E68B":"#FFF"}
    var colorRes = {color: colorMenu==="res"?"#68E68B":"#FFF"}
    var colorAdmin = {color: colorMenu==="admin"?"#68E68B":"#FFF"}
    var pers = () => {
        props.personal(true)
        props.favoritePost(false)
        props.resume(false)
        props.admin(false)
        setcolorMenu("pers")
    }
    var fav = () => {
        props.personal(false)
        props.favoritePost(true)
        props.resume(false)
        props.admin(false)
        setcolorMenu("fav")
    }

    var res = () => {
        props.personal(false)
        props.favoritePost(false)
        props.resume(true)
        props.admin(false)
        setcolorMenu("res")
    }
    var admin = () => {
        props.personal(false)
        props.favoritePost(false)
        props.resume(false)
        props.admin(true)
        setcolorMenu("admin")
    }
    return (
        <div className='ProfileMenu'>
            <button onClick={pers} style={colorPers}>Личное</button>
            <button onClick={fav} style={colorFav}>Избранное</button>
            <button onClick={res} style={colorRes}>Резюме</button>
            {props.isAdminRole?<button onClick={admin} style={colorAdmin}>Админ</button>:""}
        </div>
    );
}

export default ProfileMenu;
