const postLikes = async (id) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/likes/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ item_id: id }),
      // eslint-disable-next-line comma-dangle
    }
  );
  const data = await response.json();
  return data;
};

const getLikes = async () => {
  const response = await fetch(
    // eslint-disable-next-line comma-dangle
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/likes/'
  );
  const likes = await response.json();
  return likes;
};

export { postLikes, getLikes };
