import React from 'react';
import PostImage from '../../img/PostImage.png'
import Posts from '../posts/Posts';

const FavoritePost = () => {
  // TODO: Fetch data from DB to `favPosts`
  /* Fake data */
  let favPosts = [];
  for (let i = 0; i < 4; i++) {
      favPosts.push(
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
      <Posts cards={favPosts} withPaddingTop={false} />
    </div>
  );
}

export default FavoritePost;
