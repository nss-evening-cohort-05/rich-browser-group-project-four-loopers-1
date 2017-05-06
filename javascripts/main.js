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

  $('#getMovie').click((event) => {
    let movieTitle = $('#movieSearch').val();
    movieAPI.getMovie(movieTitle).then((results) =>{
      console.log("Movie API results:", results);
    }).catch((error) => {
      console.log("getMovie Error", error);
    });
  });

      $("#loginButton").click(() => {
        let email = $('#inputEmail').val();
        let password = $("#inputPassword").val();

        let user = {
            email,
            password
        };

        movieAPI.loginUser(user).then((response) => {
            clearLogin();
            $('#login-container').addClass('hide');
            $('.main-container').removeClass('hide');
            movieAPI.writeDom(apiKeys);
            movieAPI.createLogoutButton(apiKeys);
        }).catch((error) => {
            console.log("error in loginUser: ", error);
        });

    });

    let clearLogin = () => {
        let email = $("").val();
        let password = $("").val();
        let username = $("").val();
    };


});
