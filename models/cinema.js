const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  return this.films.map(function(film) {
    return film.title;
  })
};

Cinema.prototype.findFilm = function(title){
  return this.films.find(function(film){
    if(film.title === title){
      return true;
    }
    return false;
  })
};

Cinema.prototype.getFilmsByGenre = function(genre){
  const films = [];
  this.films.filter(function(film){
    if(film.genre === genre){
      films.push(film);
    }
  })
  return films;
};

Cinema.prototype.checkFilmsForYear = function(year){
  let result = false;
  this.films.some(function(film){
    if(film.year === year) result = true;
  })
  return result;
}

Cinema.prototype.checkFilmsAreOverLength = function(length){
  let result = false;
  this.films.some(function(film){
    if(film.length >= length) result = true;
  })
  return result;
}

Cinema.prototype.getRuntimeForAllFilms = function(films){
  let runtime = 0;
  this.films.every(function(film) {
    return runtime = runtime + film.length;
  })
  return runtime;
}
//Reduce method
// Cinema.prototype.getRuntimeForAllFilms = function () {
//   return this.films.reduce(function(accumulator, film){
//     return accumulator + film.length;
//   }, 0)
// };


Cinema.prototype.findBy = function(property, value){
  return this.films.filter(function(film) {
    return film[property] === value;
  })
}

module.exports = Cinema;
