const movies = [
  {
    name: 'The Shawshank Redemption',
    year: 1994,
  },
  {
    name: 'The Godfather',
    year: 1972,
  },
  {
    name: 'The Godfather: Part II',
    year: 1974,
  },
  {
    name: 'The Dark Knight',
    year: 2008,
  },
];

// Sort according to year, oldest first
movies.sort((a,b) => a.year - b.year);
console.log(movies.map(movie => movie.name));
