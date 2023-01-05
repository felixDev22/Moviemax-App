import { postComment, getComment } from './comments.js';

const commenting = (id) => {
  const form = document.querySelector('#form');
  const commentSection = document.querySelector('#commentSection');
  const movieCount = document.querySelector('#movieCount');
  form.onsubmit = async (e) => {
    e.preventDefault();
    const username = document.querySelector('#name');
    const insight = document.querySelector('#insight');
    if (username.value === '' || insight.value === '') {
      alert('Do not leave blanks');
      return;
    }
    const done = await postComment(username.value, insight.value, id);
    if (done.status === 201) {
      const commentItem = '?item_id='.concat(id);
      const comments = await getComment(commentItem);
      const commentsCount = comments.length;
      let comment = '';
      comments.forEach((element) => {
        comment += `<p>${element.creation_date} ${element.username}: ${element.comment}</p>`;
      });
      commentSection.innerHTML = comment;
      movieCount.innerHTML = commentsCount;
    }
    username.value = '';
    insight.value = '';
  };
};

export default commenting;