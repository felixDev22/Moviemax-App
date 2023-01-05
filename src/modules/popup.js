import cancelPopup from '../assets/cancel.png';
import popupImage from '../assets/blackout.jpg';

const popupArea = document.querySelector('#popups');

const urlData = {
  imageUrl: popupImage,
  movieTitle: 'Black out',
  genre: 'Action',
  premiered: '2015-10-12',
  description: 'A story of two boys looking for their identity in a world where the traditional role of the man is changing. They are longing for success, endless love and passionate sex - but what happens if you fail?',
};

window.hidePopup = () => {
  popupArea.classList.add('nodisplay');
  popupArea.classList.remove('background');
};

const createPopup = () => {
  popupArea.classList.remove('nodisplay');
  popupArea.classList.add('background');
  popupArea.innerHTML = `<div id="popup-flex" class="scroll">
  <div onclick='hidePopup()'>
  <img id="popupcancel" class="popupspacing" src=${cancelPopup} alt="movie cover">
  </div>
  <img id="popupimage" class="popupspacing" src=${urlData.imageUrl} alt="movie cover">
  <h2 class="popupspacing">${urlData.movieTitle}</h2>
  <div class="popupspacing">
    <div class="genre">
      <p>Genre: ${urlData.genre}</p>
      <p>premiered: ${urlData.premiered}</p>
    </div>
    <div class="description popupspacing">
      <h3>Description</h3>
      <p>${urlData.description}</p>
    </div>
  </div>
  <div class="popupspacing">
    <h3 class="commentalign">Comments <span>2</span></h3>
    <div>
      <p>2015-10-12 Lee: I loved the show</p>
      <p>2015-10-12 Lee: I loved the show</p>
    </div>
  </div>
  <div class="popupspacing">
    <h3 class="commentalign">Add a comment</h3>
    <form action="">
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
      <button type="submit">comment</button>
    </form>
  </div>
</div>`;
};

export default createPopup;
