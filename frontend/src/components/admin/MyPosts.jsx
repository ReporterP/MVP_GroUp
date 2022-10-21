import React from 'react';
import Posts from '../posts/Posts';
import PostImage from '../../img/PostImage.png'

const MyPosts = () => {
  // TODO: Fetch data from DB to `adminPosts`
  /* Fake data */
  let adminPosts = [];
  for (let i = 0; i < 6; i++) {
      adminPosts.push(
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
    <div id='myPosts'>
      <h3>Мои посты</h3>

      <Posts cards={adminPosts} withPaddingTop={false} />
    </div>
  );
}

export default MyPosts;
