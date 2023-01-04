import { comedy, action } from './variables.js';
import getNumberOfLikes from './addLikes.js';
import comedyImage from '../assets/movie.jpeg';
import getMovies from './getMovies.js';

// Render likes
const displayUI = async () => {
  const movies = getMovies();
  const data = await getNumberOfLikes();
  comedy.innerHTML = '';
  action.innerHTML = '';
  data.forEach((obj, objIndex) => {
    const { movieImg } = movies[objIndex];
    if (objIndex <= 3) {
      comedy.innerHTML += `
      <div class="card">
            <div class="image">
              <img id='movie' src="${movieImg}" alt="movie" />
            </div>
            <div class="comment-likes">
              <button id="comment">Comments</button>
              <i class="fa-sharp fa-solid fa-heart" id="like-btn"></i>
              <span id="likes">${obj.likes}</span>
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
              <button class="popupbtn" id="comment" >Comments</button>
              <i class="fa-sharp fa-solid fa-heart" id="like-btn"></i>
              <span id="likes">${obj.likes}</span>
            </div>
          </div>`;
    }
  });
};

export default displayUI;
