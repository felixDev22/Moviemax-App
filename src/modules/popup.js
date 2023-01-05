import cancelPopup from '../assets/cancel.png';
import { movies } from './displayUI.js';
import { getComment } from './comments.js';

const popupArea = document.querySelector('#popups');

window.hidePopup = () => {
  popupArea.classList.add('nodisplay');
  popupArea.classList.remove('background');
};

const createPopup = async (index) => {
  const {
    movieImg, movieInfo, movieTitle, movieStatus, moviePremier, itemId,
  } = movies[index];
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
    <div id="commentSection" >
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
      <button class="formSubmit" id="${itemId}" type="submit">comment</button>
    </form>
  </div>
</div>`;
};

export default createPopup;
