"use strict";

const numberOfFilms = +prompt('Сволько фильмов уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


for (let i = 0; i < 2; i++) {
	const a = prompt('Последний фильм, который вы посмотрели?', ''),
		b = prompt('Ваша оценка:', '');

	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}


}

if (personalMovieDB.count < 10) {
	console.log('Мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	console.log('Вы классически зритель');
} else if (personalMovieDB.count >= 30) {
	console.log('Мало фильмов');
} else {
	console.log('Произошла ошибка');
}

console.log(personalMovieDB);

