import React, {useState, lazy, Suspense} from 'react';
import Footer from '../components/main/Footer';
import Loading from '../components/main/UI/Loading';
import Header from "../components/main/Header";
const Posts = lazy(() => import('./Posts'));
const Profile = lazy(() => import('./Profile'));

const GroFile = () => {

    const [isProfile, setIsProfile] = useState(false);
    const [isPosts, setisPosts] = useState(true);

    return (
        <div>
            <Header post={isPosts}/>
                {isPosts && <Suspense fallback={<Loading/>}><Posts /></Suspense>}
                {isProfile && <Suspense fallback={<Loading/>}><Profile /></Suspense>}
            <Footer profile={setIsProfile} post={setisPosts}/>
        </div>
    );
}

export default GroFile;
