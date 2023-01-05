import './style.css';
import displayUI from './modules/displayUI.js';
import createPopup from './modules/popup.js';

displayUI();

window.addEventListener('load', () => {
  const commentBtn = document.querySelectorAll('.btnClass');
  commentBtn.forEach((element, index) => {
    element.addEventListener('click', () => {
      createPopup(index);
    });
  });
});

// // window.addEventListener('click', async (e) => {
//   const likeBtn = e.target;
//   if (likeBtn.classList.contains('fa-solid fa-heart')) {
//     const likes = likeBtn.getAttribute('fa-solid fa-heart');
//     await postLikes(likes);
//     await showLikes();
//   }
// });
