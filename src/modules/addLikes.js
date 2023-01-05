const getNumberOfLikes = async () => {
  const request = await fetch(
    // eslint-disable-next-line comma-dangle
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/YxBlOWRJNblYAJxe3dgi/likes/'
  );
  const myLikes = await request.json();
  return myLikes;
};

export default getNumberOfLikes;
