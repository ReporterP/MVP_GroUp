import React from 'react';
import Post from '../components/posts/Post';
import PostImage from '../img/PostImage.png'

const Posts = () => {
    var card = {
        status: ['#24D756', "Мироприятие"],
        picture: PostImage,
        name: "Мероприятие длинное название",
        tags: [["онлайн", '#E6D268'], ["JavaScript", '#68E68B'], 
        ["онлайн", '#E6D268'], ["JavaScript", '#68E68B'], ["онлайн", '#E6D268'], ["JavaScript", '#68E68B'], ["онлайн", '#E6D268'], ["JavaScript", '#68E68B']
    ],
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."
    }

    return (
        <div className='posts'>
            <Post 
            status={card.status} 
            picture={card.picture}
            name={card.name} 
            tags={card.tags} 
            description={card.description} />
            <Post 
            status={card.status} 
            picture={""}
            name={card.name} 
            tags={card.tags} 
            description={card.description} />
            <Post 
            status={card.status} 
            picture={card.picture}
            name={card.name} 
            tags={card.tags} 
            description={card.description} />
            <Post 
            status={card.status} 
            picture={""}
            name={card.name} 
            tags={card.tags} 
            description={card.description} />
            <Post 
            status={card.status} 
            picture={card.picture}
            name={card.name} 
            tags={card.tags} 
            description={card.description} />
            <br />
            <br />
        </div>
        
    );
}

export default Posts;
