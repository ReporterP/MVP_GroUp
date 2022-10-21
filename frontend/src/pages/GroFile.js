import React, {useState, lazy, Suspense} from 'react';
import Footer from '../components/main/Footer';
import Loading from '../components/main/UI/Loading';
import Header from "../components/main/Header";
import PostImage from '../img/PostImage.png'
const Posts = lazy(() => import('../components/posts/Posts'));
const Profile = lazy(() => import('./Profile'));

const GroFile = () => {

    const [isProfile, setIsProfile] = useState(false);
    const [isPosts, setisPosts] = useState(true);

    // TODO: Fetch data from DB to `posts`
    /* Fake data */
    let posts = [];
    for (let i = 0; i < 10; i++) {
        posts.push(
            {
                status: ['#24D756', "Мероприятие"],
                picture: Math.random() < 0.5 ? PostImage : '',
                name: `Мероприятие №${i+1} длинное название`,
                tags: [
                    ["онлайн", '#E6D268'],
                    ["JavaScript", '#68E68B'],
                    ["онлайн", '#E6D268'],
                    ["JavaScript", '#68E68B'],
                    ["онлайн", '#E6D268'],
                    ["JavaScript", '#68E68B'],
                    ["онлайн", '#E6D268'],
                    ["JavaScript", '#68E68B']
                ],
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        )
    }
    /* Fake data */

    return (
        <div>
            <Header post={isPosts}/>
                {isPosts && <Suspense fallback={<Loading/>}><Posts cards={posts} withPaddingTop={true} /></Suspense>}
                {isProfile && <Suspense fallback={<Loading/>}><Profile /></Suspense>}
            <Footer profile={setIsProfile} post={setisPosts}/>
        </div>
    );
}

export default GroFile;
