var movieAPI = ((movie) => {

  movie.writeDom = (key) => {
    movieAPI.getMovie(key).then((results) => {
      let movies = results;
      let seen = "";
      let notSeen = "";

      movies.forEach((movie) => {
        if (movie.isCompleted){
          seen += `<div class="col-xs-4 card-container">`;
          seen += ``;
        }
      })
    })
    
    // forEach
  }
  return movie;
})(movieAPI || {});
