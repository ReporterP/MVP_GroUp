import React, { useState } from 'react';

const ProfileMenu = props => {
    const [colorMenu, setcolorMenu] = useState("pers")
    var colorPers = {color: colorMenu==="pers"?"#68E68B":"#FFF"}
    var colorFav = {color: colorMenu==="fav"?"#68E68B":"#FFF"}
    var colorRes = {color: colorMenu==="res"?"#68E68B":"#FFF"}
    var colorAdmin = {color: colorMenu==="admin"?"#68E68B":"#FFF"}

    const handleClick = e => {
        let conPro = document.getElementById("containerProfile")
        conPro.scrollBy({
            top: conPro.offsetHeight,
            left: 0,
            behavior: 'smooth',
        })
    }

    var pers = () => {
        // eslint-disable-next-line no-undef
        ym(93896111,'reachGoal','click-open-personal-in-profile')
        props.personal(true)
        props.favoritePost(false)
        props.resume(false)
        props.admin(false)
        setcolorMenu("pers")
        handleClick()
    }
    var fav = () => {
        // eslint-disable-next-line no-undef
        ym(93896111,'reachGoal','click-open-fav-in-profile')
        props.personal(false)
        props.favoritePost(true)
        props.resume(false)
        props.admin(false)
        setcolorMenu("fav")
        handleClick()
    }

    var res = () => {
        // eslint-disable-next-line no-undef
        ym(93896111,'reachGoal','click-open-res-in-profile')
        props.personal(false)
        props.favoritePost(false)
        props.resume(true)
        props.admin(false)
        setcolorMenu("res")
        handleClick()
    }
    var admin = () => {
        props.personal(false)
        props.favoritePost(false)
        props.resume(false)
        props.admin(true)
        setcolorMenu("admin")
        handleClick()
    }
    return (
        <div className='ProfileMenu' id="ProfileMenu">
            <button onClick={pers} style={colorPers}>Личное</button>
            <button onClick={fav} style={colorFav}>Отклики</button>
            <button onClick={res} style={colorRes}>Резюме</button>
            {props.isAdminRole?<button onClick={admin} style={colorAdmin}>Админ</button>:""}
        </div>
    );
}

export default ProfileMenu;
