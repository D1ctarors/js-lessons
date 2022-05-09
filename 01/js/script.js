"use strict";

const numberOfFilms = +prompt('Сволько фильмов уже посмотрели?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Последний фильм, который вы посмотрели?', ''),
		b = prompt('Ваша оценка: ', ''),
		c = prompt('Последний фильм, который вы посмотрели?', ''),
		d = prompt('Ваша оценка: ', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

