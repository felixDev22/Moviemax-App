/* eslint-disable import/no-duplicates */
import { comedy, action } from './variables.js';
import getMovies from './getMovies.js';
import { pullMovies } from './getMovies.js';
import { getLikes } from './postLikes.js';

const movies = getMovies();

// Render likes
const displayUI = async () => {
  const likeArray = await getLikes();
  comedy.innerHTML = '';
  action.innerHTML = '';
  movies.forEach(async (obj, objIndex) => {
    const { movieImg, itemId } = obj;
    let likes = 0;
    likeArray.forEach((like) => {
      if (like.item_id === itemId) {
        likes = like.likes;
      }
    });
    if (objIndex <= 3) {
      comedy.innerHTML += `
    <div class="card">
          <div class="image">
            <img id='movie' src="${movieImg}" alt="movie" />
          </div>
          <div class="comment-likes">
            <button class="btnClass" id="${objIndex}">Comments</button>
            <i class="fa-sharp fa-solid fa-heart" id="${itemId}"></i>
            <span id="${objIndex}">${likes}</span>
          </div>
        </div>
`;
    } else {
      action.innerHTML += `
    <div class="card">
          <div class="image">
            <img id='movie' src="${movieImg}" alt="movie" />
          </div>
          <div class="comment-likes">
            <button class="btnClass" id="${objIndex}" >Comments</button>
            <i class="fa-sharp fa-solid fa-heart" id="${itemId}"></i>
            <span id="${objIndex}">${likes}</span>
          </div>
        </div>`;
    }
  });
};

window.liking = () => {

};

const featuredShows = document.querySelector('.counter');
featuredShows.innerHTML = `Movies (${pullMovies.length})`;

export default displayUI;
export { movies };
