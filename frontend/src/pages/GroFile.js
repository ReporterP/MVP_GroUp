import React, { useState, lazy, Suspense, useEffect, useMemo } from 'react';
import Footer from '../components/main/Footer';
import Loading from '../components/main/UI/Loading';
import Header from "../components/main/Header";
import Cookies from 'universal-cookie';
import RefreshContext from '../components/context/RefreshContext';

const Posts = lazy(() => import('../components/posts/Posts'));
const Profile = lazy(() => import('./Profile'));

const GroFile = () => {
    const [refresh, setrefresh] = useState(false);

    const [isProfile, setIsProfile] = useState(false);
    const [isPosts, setisPosts] = useState(true);
    const [postsInfo, setPostsInfo] = useState([]);
    const [postLike, setPostLike] = useState([]);

    const cookies = useMemo(() => new Cookies(), []);
    const dataUserID = useMemo(() => cookies.get("user").id, [cookies])

    const showLike = () => {
        fetch('https://group.ithub.software:5000/api/users/likeposts/' + dataUserID)
            .then(response => response.json())
            .then(data => {
                data = data?.map(e => e.id);
                setPostLike(data);
                showInfo()
            })
            .catch(err => console.log(err))
    }

    const showInfo = () => {
        fetch('https://group.ithub.software:5000/api/posts')
            .then(response => response.json())
            .then(data => setPostsInfo(data))
            .catch(err => setPostsInfo([{
                type: "Ошибка",
                picture: '',
                title: `ошибка загрузки постов`,
                tag_id: [],
                text: ""
            }]))
    }

    useEffect(()=> {
        showLike()
        return () => {
            setrefresh(false)
        }
    }, [refresh]);

    return (
        <>
            {
            // eslint-disable-next-line no-undef
            ym(93896111, 'userParams', {
                UserTelegramID: cookies.get("user").telegram_id,
                UserID: dataUserID*1
            })
            }
            <Header post={isPosts} />
            <RefreshContext.Provider value={{refresh, setrefresh}}>
                {isPosts && <Suspense fallback={<Loading />}><div className='scrollable scroll_posts'><Posts cards={postsInfo} likes={postLike} withPaddingTop={true} /></div></Suspense>}
                {isProfile && <Suspense fallback={<Loading />}><Profile /></Suspense>}
                <Footer profile={setIsProfile} post={setisPosts} />
            </RefreshContext.Provider>
        </>);
}

export default GroFile;
