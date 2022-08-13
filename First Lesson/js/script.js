const numberOfFilms = +prompt("Сколько фильмов мы посмотрели?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const one = prompt('Один из последних просмотренных фильмов?', ''),
      two = prompt('На сколько оцените его?', ''),
      three = prompt('Один из последних просмотренных фильмов?', ''),
      four = prompt('На сколько оцените его?', '');

personalMovieDB.movies[one] = two;
personalMovieDB.movies[three] = four;

console.log(personalMovieDB);


