
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


    movie.createLogoutButton = (apiKey) => {
        let uid = movieAPI.credentialsCurrentUser().uid;
        movieAPI.getUser(apiKey, uid).then((user) => {
            console.log("dom user: ", user);
            let logoutButton = `<button class="btn btn-danger" id="logoutButton">LOGOUT ${user.username}</button>`;
            $('#logout-container').html(logoutButton);
        });
    };

 	return movie;

 })(movieAPI || {});
