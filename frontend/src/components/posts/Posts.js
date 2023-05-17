import React, { Fragment } from 'react';
import Post from './Post';

const Posts = (props) => {
    const withPaddingTop = props.withPaddingTop
    return (
        <div className={'posts ' + (withPaddingTop ? 'withPaddingTop' : '')}>
            {props.cards.map(card => 
                    <Fragment key={card.id}>
                        <Post
                            id={card.id}
                            type={card.type}
                            picture={card.picture}
                            title={card.title}
                            tag_id={card.tag_id}
                            text={card.text}
                            like={props.likes.filter(e => e * 1 === card.id * 1)} />
                    </Fragment>)}
            <br />
        </div>

    );
}

export default Posts;
