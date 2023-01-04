import './style.css';
import createPopup from './modules/popup.js';

const popupBtn = document.querySelector('.popupbtn');

popupBtn.addEventListener('click', createPopup);