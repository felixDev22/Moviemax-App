import { postLikes, getLikes } from './postLikes.js';

const showLikes = async (likes, add, moviesId) => {
  const moviesId = likes.getAttribute('data-id');
  postLikes(oneID);
  const noOfLikes = await getLikes();
  const likeAmount = noOfLikes.filter(
    (likeObj) => likeObj.item_id === moviesId
  );
  if (likeAmount.length > 0) {
    likes.textContent = `${likeAmount[0].likes + add}`;
  }
};

// const showLikes = async (likes) => {
//   const movieId = likes.getAttribute('id');
//   const likesList = await getLikes();
//   const numLikes = likesList.filter((obj) => obj.item_id === `${movieId}`);
//   if (numLikes.length > 0) {
//     likes.textContent = `${numLikes[0].likes} likes`;
//     console.log(likes.textContent);
//   }
// };

export default showLikes;
