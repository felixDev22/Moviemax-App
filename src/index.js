import './style.css';
import displayUI from './modules/displayUI.js';
import createPopup from './modules/popup.js';
import { postLikes } from './modules/postLikes.js';
import commenting from './modules/formComment.js';

window.addEventListener('load', displayUI());

document.addEventListener('click', async (e) => {
  if (e.target.classList.contains('btnClass')) {
    createPopup(e.target.id);
  }
  if (e.target.classList.contains('fa-heart')) {
    const done = await postLikes(e.target.id);
    if (done.status === 201) {
      displayUI();
    }
  }
  if (e.target.classList.contains('formSubmit')) {
    commenting(e.target.id);
  }
});
