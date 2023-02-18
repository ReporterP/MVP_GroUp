import React from 'react';
import Post from './Post';

const Posts = (props) => {
    const withPaddingTop = props.withPaddingTop

    return (
        <div className={'posts ' + (withPaddingTop ? 'withPaddingTop' : '')}>
            {props.cards.map(card => {                
                return (
                    <Post 
                    id={card.id}
                    type={card.type} 
                    picture={card.picture}
                    title={card.title} 
                    tag_id={card.tag_id} 
                    text={card.text}
                />)})}
            <br />
        </div>
        
    );
}

export default Posts;
