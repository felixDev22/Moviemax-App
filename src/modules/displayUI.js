/* eslint-disable import/no-duplicates */
import { comedy, action } from './variables.js';
import getMovies from './getMovies.js';
import { pullMovies } from './getMovies.js';
import { getLikes } from './postLikes.js';
import cancelPopup from '../assets/cancel.png';
import { getComment, postComment } from './comments.js';

const popupArea = document.querySelector('#popups');

const movies = getMovies();

window.hidePopup = () => {
  popupArea.classList.add('nodisplay');
  popupArea.classList.remove('background');
};

window.commenting = () => {
  const form = document.querySelector('#form');
  const popupTitle = document.querySelector('#title');
  form.onsubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector('#name');
    const insight = document.querySelector('#insight');
    if (username.value === '' || insight.value === '') {
      alert('Do not leave blanks');
      return;
    }
    movies.forEach((element) => {
      if (popupTitle.innerHTML === element.movieTitle) {
        postComment(username.value, insight.value, element.itemId);
      }
    });
    username.value = '';
    insight.value = '';
  };
};

window.createPopup = async () => {
  const {
    movieImg, movieInfo, movieTitle, movieStatus, moviePremier, itemId,
  } = movies[0];
  const commentItem = '?item_id='.concat(itemId);
  const comments = await getComment(commentItem);
  const commentsCount = comments.length;
  let comment = '';
  comments.forEach((element) => {
    comment += `<p>${element.creation_date} ${element.username}: ${element.comment}</p>`;
  });
  popupArea.classList.remove('nodisplay');
  popupArea.classList.add('background');
  popupArea.innerHTML = `<div id="popup-flex" class="scroll">
  <div onclick='hidePopup()'>
  <img id="popupcancel" class="popupspacing" src=${cancelPopup} alt="movie cover">
  </div>
  <img id="popupimage" class="popupspacing" src=${movieImg} alt="movie cover">
  <h2 id="title" class="popupspacing">${movieTitle}</h2>
  <div class="popupspacing">
    <div class="genre">
      <p>Status: ${movieStatus}</p>
      <p>premiered: ${moviePremier}</p>
    </div>
    <div class="description popupspacing">
      <h3>Description</h3>
      <p>${movieInfo}</p>
    </div>
  </div>
  <div class="popupspacing">
    <h3 class="commentalign">Comments <span>${commentsCount}</span></h3>
    <div>
      ${comment}
    </div>
  </div>
  <div class="popupspacing">
    <h3 class="commentalign">Add a comment</h3>
    <form id="form">
      <fieldset>
        <label for="name">
          <input type="text" id="name" placeholder="Your name">
        </label>
      </fieldset>
      <fieldset class="popupspacing">
        <label for="insight">
          <textarea name="insight" id="insight" cols="30" rows="10" placeholder="Your insight"></textarea>
        </label>
      </fieldset>
      <button onclick="commenting()" type="submit">comment</button>
    </form>
  </div>
</div>`;
};

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
            <button onclick="createPopup()" class="btnClass" id="comment">Comments</button>
            <i onclick="liking()" class="fa-sharp fa-solid fa-heart" id="like-btn"></i>
            <span id="likes">${likes}</span>
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
            <button onclick="createPopup()" class="btnClass" id="comment" >Comments</button>
            <i onclick="liking()" class="fa-sharp fa-solid fa-heart" id="like-btn"></i>
            <span id="likes">${likes}</span>
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
