
var movieAPI = ((movie) => {

  movie.writeDom = (key) => {

  	console.log("user keys", key);

      let seen = "";
      let notSeen = "";

    movieAPI.getUserSavedMovies(key).then((results) => {

      results.forEach((movie) => {
        if (movie.isSeen === true){
          seen += `<div class="col-xs-4 card-container">`;
          seen += `<span class="glyphicon glyphicon-remove pull-right"></span>`;
          seen += `<img src="http://forkliftsystems.com.au/wp-content/uploads/2015/04/placeholder-200x200.png">`;
          seen += `<h3>${movie.Title}</h3>`;
          seen += `<p>${movie.Plot}</p>`;
          seen += `<p>${movie.Actors}`;
          seen += `<p>${movie.Year}</p>`;
          seen += `</div>`;
        } else {
          notSeen += `<div class="col-xs-4 card-container">`;
          notSeen += `<span class="glyphicon glyphicon-remove pull-right"></span>`;
          notSeen += `<img src="http://forkliftsystems.com.au/wp-content/uploads/2015/04/placeholder-200x200.png">`;
          notSeen += `<h3>${movie.Title}</h3>`;
          notSeen += `<p>${movie.Plot}</p>`;
          notSeen += `<p>${movie.Actors}`;
          notSeen += `<p>${movie.Year}</p>`;
          notSeen += `</div>`;
        }
        $('#movies-seen').html(seen);
        $('#movies-cd not-seen').html(notSeen);
      });
    });
  };

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
