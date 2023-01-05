import './style.css';
import displayUI from './modules/displayUI.js';
import createPopup from './modules/popup.js';
// import { comment } from './modules/variables.js';

window.addEventListener('load', () => {
  displayUI();
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

// window.addEventListener('click', async (e) => {
//   const commentBtn = e.target;

//   const count = commentBtn.indexOf(commentBtn);
//   console.log(count);
//   if (commentBtn.classList.contains('.btnClass')) {
//     commentBtn.forEach((element, index) => {
//       element.addEventListener('click', () => {
//         createPopup(index);
//       });
//     });
//   }
// });
