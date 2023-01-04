import './style.css';
import createPopup from './modules/popup.js';

const popupBtn = document.querySelectorAll('.popupbtn');

popupBtn.forEach((item) => {
  item.addEventListener('click', createPopup);
});