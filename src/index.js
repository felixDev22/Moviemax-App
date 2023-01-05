import './style.css';
import displayUI from './modules/displayUI.js';
import { postLikes } from './modules/postLikes.js';
import showLikes from './modules/showlikes.js';
import createPopup from './modules/popup.js';

displayUI();

window.addEventListener('load', () => {
  const commentBtn = document.querySelectorAll('.btnClass');
  commentBtn.forEach((element) => {
    element.addEventListener('click', createPopup);
  });
});

window.addEventListener('click', async (e) => {
  const likeBtn = e.target;
  if (likeBtn.className === 'fa-solid fa-heart') {
    console.log(e.target);
  }
});
