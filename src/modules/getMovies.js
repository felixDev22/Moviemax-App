/* eslint-disable object-curly-newline */
const baseUrl = 'https://api.tvmaze.com/search/shows?q=';
const pullMovies = [
  'Modern Family',
  'Friends',
  'The Office',
  'Reacher',
  'Gangland',
  'Titans',
];
const displayMovies = [];

const getMovies = () => {
  pullMovies.forEach(async (movies, index) => {
    const itemId = 'item'.concat(index);
    const fetchUrl = baseUrl.concat(movies);
    const response = await fetch(fetchUrl);
    const data = await response.json();
    const arr = data[0];
    const { show } = arr;
    const { id, name, status, image, summary, premiered } = show;
    const { medium } = image;
    const trimmedSummary = summary.substring(0, 200);
    const movie = {
      movieId: id,
      itemId,
      movieImg: medium,
      movieTitle: name,
      movieStatus: status,
      moviePremier: premiered,
      movieInfo: trimmedSummary,
    };
    displayMovies.push(movie);
  });
  return displayMovies;
};

export default getMovies;
export { pullMovies };
