const baseUrl = 'https://api.tvmaze.com/search/shows?q=';
const pullMovies = ['Young Sheldon', 'Modern Family', 'Friends', 'The Office', 'Reacher', 'Hanna', 'Gangland', 'Titans'];
const displayMovies = [];

const getMovies = () => {
  pullMovies.forEach(async (moviez) => {
    const fetchUrl = baseUrl.concat(moviez);
    const response = await fetch(fetchUrl);
    const data = await response.json();
    const arr = data[0];
    const { show } = arr;
    const {
      id, name, status, image, summary, premiered,
    } = show;
    const { medium } = image;
    const trimmedSummary = summary.substring(0, 200);
    const movie = {
      movieId: id,
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