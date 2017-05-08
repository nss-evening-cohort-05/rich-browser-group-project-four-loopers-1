var movieAPI = ((oldFirebase) => {

    oldFirebase.registerUser = (credentials) => {
        return new Promise((resolve, reject) => {
            firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
                .then((authData) => {
                    resolve(authData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };


    oldFirebase.loginUser = (credentials) => {
        return new Promise((resolve, reject) => {
            firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
                .then((authData) => {
                    resolve(authData);
                })
                .catch((error) => {
                    reject(error);
                });
        });
        // movieAPI.createLogoutButton(apiKeys);
    };


    oldFirebase.addUser = (keys, newUser) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'POST',
                url: `${keys.databaseURL}/users.json`,
                data: JSON.stringify(newUser)
            }).done((response) => {
                resolve(response);
            }).fail((error) => {
                reject(error);
            });
        });
    };

    oldFirebase.getUser = (keys, uid) => {
        let users = [];
        return new Promise((resolve, reject) => {
            $.ajax({
                method: 'GET',
                url: `${keys.databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`
            }).done((user) => {
                console.log("user iife get", user);
                let response = user;
                Object.keys(response).forEach((key) => {
                    response[key].id = key;
                    users.push(response[key]);
                });
                resolve(users[0]);
            }).fail((error) => {
                reject(error);
            });
        });
    };

  oldFirebase.credentialsCurrentUser = () => {
    return firebase.auth().currentUser;
  };



    oldFirebase.credentialsCurrentUser = () => {
        return firebase.auth().currentUser;
    };

    oldFirebase.logoutUser = (email, password) => {
        firebase.auth().signOut();
    };

    return oldFirebase;

})(movieAPI || {});
