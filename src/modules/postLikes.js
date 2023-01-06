const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/likes/';

const getLikes = async () => {
  const response = await fetch(baseUrl);
  const data = await response.json();
  return data;
};

const postLikes = async (id) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  });
  return response;
};

export { getLikes, postLikes };