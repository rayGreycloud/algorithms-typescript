var movies = [
    {
        name: 'The Shawshank Redemption',
        year: 1994
    },
    {
        name: 'The Godfather',
        year: 1972
    },
    {
        name: 'The Godfather: Part II',
        year: 1974
    },
    {
        name: 'The Dark Knight',
        year: 2008
    },
];
// Sort according to year, oldest first
movies.sort(function (a, b) { return a.year - b.year; });
console.log(movies.map(function (movie) { return movie.name; }));
movies.sort();
console.log(movies.map(function (movie) { return movie.name; }));
