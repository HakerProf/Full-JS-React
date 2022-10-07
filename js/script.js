let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you seen already?");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you seen already?");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

function rememberMyFilms() {
    for (let i = 1; i <= 2; i++) {
        let film = prompt(`Movie #${i} have you seen already?`, "");
        if (film != null && film !== "" && film.length <= 50) {
            let filmAssess = +prompt(`Your assessment of movie #${i}?`, "");
            personalMovieDB.movies[film] = filmAssess;
        } else {
            i = i - 1;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
        alert("Переглянуто мало фільмів");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("Ви класичний глядач");
    } else if (personalMovieDB.count >= 30) {
        alert("Ви кіноман");
    } else {
        alert("Сталася помилка");
    }
}

rememberMyFilms();
detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 1; i < 4; i ++){
        personalMovieDB.genres[i-1] = prompt(`Ваш улюблений жанр під номером ${i}?`);
    }
}
writeYourGenres();
console.log(personalMovieDB);
