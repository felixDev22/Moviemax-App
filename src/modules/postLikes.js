const postLikes = async (users) => {
  const response = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/likes/',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(users),
      // eslint-disable-next-line comma-dangle
    }
  );
  const data = await response.json();

  return data;
};

export default postLikes;
