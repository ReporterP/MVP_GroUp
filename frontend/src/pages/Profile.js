import React, {useState, lazy, Suspense} from 'react';
import Loading from '../components/main/UI/Loading';
import ProfileMenu from '../components/profile/UI/ProfileMenu';
import Info from '../components/profile/Info'
import Cookies from 'universal-cookie';
import Admin from '../components/admin/Admin';

const FavoritePost = lazy(() => import('../components/profile/FavoritePost'));
const Personal = lazy(() => import('../components/profile/Personal'));
const Resume = lazy(() => import('../components/profile/Resume'));

const Profile = () => {
    var cookie = new Cookies();
    const cookiesUser = cookie.get("user")

    const [isPersonal, setisPersonal] = useState(true);
    const [isFavoritePost, setisFavoritePost] = useState(false);
    const [isResume, setisResume] = useState(false);
    const [isAdmin, setisAdmin] = useState(false);

    return (
        <div>
            <Info />
            <ProfileMenu personal={setisPersonal} favoritePost={setisFavoritePost} resume={setisResume} admin={setisAdmin} isAdminRole={cookiesUser.role}/>
            <div className='containerProfileComp'>
                {isResume && <Suspense fallback={<Loading/>}><Resume/></Suspense>}
                {isPersonal && <Suspense fallback={<Loading/>}><Personal/></Suspense>}  
                {isFavoritePost && <Suspense fallback={<Loading/>}><FavoritePost/></Suspense>}
                {isAdmin && <Suspense fallback={<Loading/>}><Admin/></Suspense>}
            </div>
        </div>
    );
}

export default Profile;
