import './style.css';
import displayUI from './modules/displayUI.js';
import { postLikes } from './modules/postLikes.js';
import showLikes from './modules/showlikes.js';
import createPopup from './modules/popup.js';

window.addEventListener('load', () => {
  displayUI();

  const commentBtn = document.querySelectorAll('.btnClass');
  commentBtn.forEach((element) => {
    element.addEventListener('click', createPopup);
  });
});

window.addEventListener('click', async (e) => {
  const likeBtn = e.target;
  if (likeBtn.classList.contains('fa-solid fa-heart')) {
    const likes = likeBtn.getAttribute('fa-solid fa-heart');
    await postLikes(likes);
    await showLikes();
  }
});
