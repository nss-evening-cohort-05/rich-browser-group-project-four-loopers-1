let apiKeys = {};

movieAPI.firebaseCredentials().then((keys) => {
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    // console.log("api keys: ", apiKeys);
    // movieAPI.writeDom(apiKeys);
}).catch((error) => {
    console.log("key errors", error);
});

$(document).ready(function() {

    $("body").keyup(function() {
        if (window.event.keyCode === 13) {
            getMovieFromDb();
        }
    });

    $('#getMovie').click((event) => {
        let movieTitle = $('#movieSearch').val();
        let movieActors = event.Actors;
        let newMovie = {
            isSeen: false,
            movie: movieTitle,
            actors: movieActors
        };
        movieAPI.getMovie(movieTitle).then((results) => {
            console.log("Movie API results:", results);
            movieAPI.addMovie(apiKeys, results); 		// call post movie to firebase here
        }).catch((error) => {
            console.log("getMovie Error", error);
        });
        // getMovie();									// maybe don't want to do this
    });


  let getMovieFromDb = (event) => {
  	let movieTitle = $('#movieSearch').val();
	    movieAPI.getMovie(movieTitle).then((results) =>{
		movieAPI.writeDom(results);
	      console.log("Movie API results:", results);
	    }).catch((error) => {
	      console.log("getMovie Error", error);
	    });
  };

    $("#loginButton").click(() => {
        let email = $('#inputEmail').val();
        let password = $("#inputPassword").val();
        let username = $("#inputUsername").val();
        let user = {
            email,
            password
        };

        movieAPI.loginUser(user).then((response) => {
            clearLogin();
            $('#login-container').addClass('hide');
            $('#movie-container').removeClass('hide');
            movieAPI.writeDom(apiKeys);
            movieAPI.createLogoutButton(apiKeys);
        }).catch((error) => {
            console.log("error in loginUser: ", error);
        });

    });

    $("#registerButton").click(() => {
        let email = $("#inputEmail").val();
        let password = $("#inputPassword").val();
        let username = $("#inputUsername").val();
        let user = {
            email,
            password
        };
        console.log("username: ", username);
        movieAPI.registerUser(user).then((response) => {
            let newUser = {
                uid: response.uid,
                username: username
            };
            movieAPI.addUser(apiKeys, newUser).then((response) => {
                movieAPI.loginUser(user).then((response) => {
                    clearLogin();
                    $('#login-container').addClass('hide');
                    $('#movie-container').removeClass('hide');
                    movieAPI.writeDom(apiKeys);
                    movieAPI.createLogoutButton(apiKeys);
                }).catch((error) => {
                    console.log("error in loginUser: ", error);
                });
            }).catch((error) => {
                console.log("error in addUser", response);
            });
        }).catch((error) => {
            console.log("error in registerUser", error);
        });
    });

    $('#logout-container').on('click', '#logoutButton', () => {
        clearLogin();
        movieAPI.logoutUser();
        $('#login-container').removeClass('hide');
        $('#movie-container').addClass('hide');
        $('#logout-container').html("");
    });

    let clearLogin = () => {
        $("#inputEmail").val("");
        $("#inputPassword").val("");
        $("#inputUsername").val("");
    };

});