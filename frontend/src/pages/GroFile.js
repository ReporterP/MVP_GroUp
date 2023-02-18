import React, {useState, lazy, Suspense, useEffect} from 'react';
import Footer from '../components/main/Footer';
import Loading from '../components/main/UI/Loading';
import Header from "../components/main/Header";
import axios from 'axios';

const Posts = lazy(() => import('../components/posts/Posts'));
const Profile = lazy(() => import('./Profile'));

const GroFile = () => {

    const [isProfile, setIsProfile] = useState(false);
    const [isPosts, setisPosts] = useState(true);
    const [postsInfo, setPostsInfo] = useState([]);

    useEffect(() => {
        axios.get('api/posts/', {
            headers: { 
                "Access-Control-Allow-Origin": "*", 
                'Content-Type': "application/json" 
            }}).then(res => setPostsInfo(res.data))
            .catch(err => setPostsInfo([{
                type: "Ошибка",
                picture: '',
                title: `ошибка загрузки постов`,
                tag_id: [],
                text: ""
            }]))
    }, []);

    return (
        <div>
            <Header post={isPosts}/>
                {isPosts && <Suspense fallback={<Loading/>}><Posts cards={postsInfo} withPaddingTop={true} /></Suspense>}
                {isProfile && <Suspense fallback={<Loading/>}><Profile /></Suspense>}
            <Footer profile={setIsProfile} post={setisPosts}/>
        </div>
    );
}

export default GroFile;
