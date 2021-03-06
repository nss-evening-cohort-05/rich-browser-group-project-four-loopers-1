
var movieAPI = ((movie) => {

  movie.writeDom = (key) => {

  	console.log("user keys", key);

      let seen = "";
      let notSeen = "";

    movieAPI.getUserSavedMovies(key).then((results) => {

      results.forEach((movie) => {
        if (movie.isSeen === true){
          seen += `<div class="col-xs-4 card-container jumbotron">`;
          seen += `<span class="glyphicon glyphicon-remove pull-right"></span>`;
          seen += `<img src="http://www.seriouseats.com/images/20110325-food-lab-tater-tots-mushy-center.jpg">`;
          seen += `<h3>${movie.Title}</h3>`;
          seen += `<p>${movie.Plot}</p>`;
          seen += `<p>${movie.Actors}`;
          seen += `<p>${movie.Year}</p>`;
          seen += ` <div class="btn-group" data-toggle="buttons"><label class="btn btn-primary active"><input type="checkbox" checked autocomplete="off">Seen!</label>`;
          seen += ` <label class="btn btn-primary"><input type="checkbox" autocomplete="off">Not Seen</label></div>`;
          seen += `<div class="ratingSystem container">`;
          seen += `<h6>Rating</h6>`;
          seen += `<input name="star" type="radio" class="star"/>`;
          seen += `<label class="star-1" for="star-1">1</label>`;
          seen += `<input name="star" type="radio" class="star"/>`;
          seen += `<label class="star-1" for="star-1">2</label>`;
          seen += `<input name="star" type="radio" class="star"/>`;
          seen += `<label class="star-1" for="star-1">3</label>`;
          seen += `<input name="star" type="radio" class="star"/>`;
          seen += `<label class="star-1" for="star-1">4</label>`;
          seen += `<input name="star" type="radio" class="star"/>`;
          seen += `<label class="star-1" for="star-1">5</label>`;
          seen += `</div>`;
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
