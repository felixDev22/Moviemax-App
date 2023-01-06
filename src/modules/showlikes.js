import { getLikes } from './postLikes.js';

const showLikes = async (likes) => {
  const movieId = likes.getAttribute('id');
  const likesList = await getLikes();
  const numLikes = likesList.filter((obj) => obj.item_id === `${movieId}`);
  if (numLikes.length > 0) {
    likes.textContent = `${numLikes[0].likes} likes`;
  }
};

export default showLikes;
