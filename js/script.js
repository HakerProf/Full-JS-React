let numberOfFilms = prompt("How many movies have you seen already?", "0");
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

// for (i = 1; i <= 2; i++) {
//     let film = prompt(`Movie #${i} have you seen already?`, "");
//     if (film != null && film !== "" && film.length <= 50) {
//         let filmAssess = +prompt(`Your assessment of movie #${i}?`, "");
//         personalMovieDB.movies[film] = filmAssess;
//     } else {
//         i = i - 1;
//     }
// }

// let i = 1;
// while (i <= 2) {
//     let film = prompt(`Movie #${i} have you seen already?`, "");
//     if (film != null && film !== "" && film.length <= 50) {
//         let filmAssess = +prompt(`Your assessment of movie #${i}?`, "");
//         personalMovieDB.movies[film] = filmAssess;
//         i++;
//     }
// }

let i = 1;
do {
    let film = prompt(`Movie #${i} have you seen already?`, "");
    if (film != null && film !== "" && film.length <= 50) {
        let filmAssess = +prompt(`Your assessment of movie #${i}?`, "");
        personalMovieDB.movies[film] = filmAssess;
        i++;
    }
}
while (i <= 5);

console.log(personalMovieDB);
if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
    alert("Переглянуто мало фільмів");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("Ви класичний глядач");
} else if (personalMovieDB.count >= 30) {
    alert("Ви кіноман");
} else {
    alert("Сталася помилка");
}
