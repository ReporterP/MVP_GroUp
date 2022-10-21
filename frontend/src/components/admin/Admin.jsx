import React from 'react';
import CreatePost from './CreatePost';
import MyPosts from './MyPosts';

const Admin = () => {
    return (
        <div id='admin'>
            <CreatePost />

            <MyPosts />
        </div>
    );
}

export default Admin;
