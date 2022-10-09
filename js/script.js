const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function () {
        personalMovieDB.count = +prompt("How many movies have you seen already?");
        while (personalMovieDB.count === "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How many movies have you seen already?");
        }
    },
    rememberMyFilms: function () {
        for (let i = 1; i <= 2; i++) {
            let film = prompt(`Movie #${i} have you seen already?`, "");
            if (film != null && film !== "" && film.length <= 50) {
                personalMovieDB.movies[film] = +prompt(`Your assessment of movie #${i}?`, "");
            } else {
                i = i - 1;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10 && personalMovieDB.count >= 0) {
            alert("Переглянуто мало фільмів");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("Ви класичний глядач");
        } else if (personalMovieDB.count >= 30) {
            alert("Ви кіноман");
        } else {
            alert("Сталася помилка");
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Ваш улюблені жанри, через кому?`).toLowerCase();
            if (genres == null || genres === "") {
                i--;
            } else {
                personalMovieDB.genres = genres.split(", ");
            }
        }
        personalMovieDB.genres.forEach(function (value, index, array) {
            console.log(`Улюблений жанр #${index+1} - це ${value}`)
        })
    },
    showMyDB: function () {
        if (personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => personalMovieDB.private = personalMovieDB.private !== true

}

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB(personalMovieDB.toggleVisibleMyDB());

