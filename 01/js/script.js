"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
	}
}
// start();


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
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
}
// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классически зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Мало фильмов');
	} else {
		console.log('Произошла ошибка');
	}
}
// detectPersonalLevel();



function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genre = prompt(`Ваш любимый жанр под номером ${i}`);

		if (genre != null && genre != '' && genre.length < 10) {
			personalMovieDB.genres[i - 1] = genre;
		} else {
			i--;
		}
	}
}
writeYourGenres();