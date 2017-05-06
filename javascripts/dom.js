 var movieAPI = ((movie) => {

 	movie.writeDom = () => {
 		console.log("made it to writeDom function");

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
