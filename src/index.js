import './style.css';
import displayUI from './modules/displayUI.js';
import { postLikes } from './modules/postLikes.js';
import showLikes from './modules/showlikes.js';

document.addEventListener('DOMContentLoaded', async () => {
  await displayUI();
  const likes = document.querySelectorAll('#likes');
  likes.forEach(async (likes) => {
    await showLikes(likes);
  });
});

const all = document.querySelector('body');

all.addEventListener('click', async (e) => {
  if (e.target.className === 'fa-sharp') {
    console.log(e.target.id);
    postLikes(e.target.id);
  }
});
