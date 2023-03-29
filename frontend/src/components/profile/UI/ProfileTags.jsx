import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';

const ProfileTags = props => {

    var cookie = new Cookies();
    const cookiesUser = cookie.get("user")

    const [Tags, setTags] = useState([]);

    const getTags = () => {
        fetch('/api/tags-user/user/' + cookiesUser.id)
        .then(response => response.json())
        .then(data => setTags(data))
        .catch(err => console.log(err))}

    useEffect(getTags, [props.update])

    return (
        <div className='tags'>{Tags.map(e=><div key={e.id} style={{backgroundColor: e.color}}>{e.tag}</div>)}</div>
    );
}

export default ProfileTags;
