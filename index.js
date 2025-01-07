var _ = require("underscore");

const movies = [
  {
    title: "The Galactic Voyage",
    runtime: 142,
    rating: 8.5,
    year: 2021,
  },
  {
    title: "Mystic Shadows",
    runtime: 98,
    rating: 7.2,
    year: 2019,
  },
  {
    title: "Rogue Element",
    runtime: 115,
    rating: 8.1,
    year: 2023,
  },
  {
    title: "Timeless Quest",
    runtime: 130,
    rating: 9.0,
    year: 2020,
  },
  {
    title: "Echoes of Eternity",
    runtime: 124,
    rating: 8.7,
    year: 2022,
  },
  {
    title: "Parallel Realities",
    runtime: 107,
    rating: 7.8,
    year: 2018,
  },
  {
    title: "Legacy of the Titans",
    runtime: 150,
    rating: 9.2,
    year: 2021,
  },
];

var results = [];

_.forEach(movies, function (movie) {
  results.push(movie.title);
});

console.log(results);
