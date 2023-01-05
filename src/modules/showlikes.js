import { getLikes } from './postLikes.js';

const showLikes = async (likes) => {
  const likesPosted = await getLikes();
  const numLikes = likesPosted.filter((Obj) => Obj.item_id);
  if (numLikes.Length > 0) {
    likes.textContent = `${numLikes[0].likes}`;
    console.log(numLikes);
  }
};
export default showLikes;
