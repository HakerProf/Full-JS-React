let numberOfFilms = prompt("How many movies have you seen already?","0");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
console.log(personalMovieDB);

let film_1 = prompt("Last movie 1 have you seen already?","logan");
let filmAssess_1 = +prompt("Movie 1 assess?","8.1");
let film_2 = prompt("Last movie 2 have you seen already?","logan");
let filmAssess_2 = +prompt("Movie 2 assess?","8.1");

// personalMovieDB.movies.film_1 = filmAssess_1;  '.'
personalMovieDB.movies[film_1] = filmAssess_1; //  [] is better way
personalMovieDB.movies[film_2] = filmAssess_2;
