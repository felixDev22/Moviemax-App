const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/comments';

// postComment('Leehaney', 'this is great', 'item1');
// getComment('?item_id=item1');

const postComment = async (userName, insight, id) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: userName,
      comment: insight,
      item_id: id,
    }),
  });
  return response;
};

const getComment = async (id) => {
  const fetchUrl = baseUrl.concat(id);
  const response = await fetch(fetchUrl);
  const data = await response.json();
  return data;
};

export { postComment, getComment };