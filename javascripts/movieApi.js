var movieAPI = (function (movieCall) {

	movieCall.getMovie = function (searchValue) {
		return new Promise((resolve, reject) =>{
			$.ajax({
				method:"GET",
				url:`http://www.omdbapi.com/?t=${searchValue}&y=&plot=short&r=json`
			}).then((response)=>{
				resolve(response);
			},(error)=>{
				reject(error);
			});
		});
	};

	movieCall.getUserSavedMovies = (apiKeys) => {
		let items = [];
		return new Promise((resolve, reject) => {
			let uid = movieAPI.credentialsCurrentUser().uid;
			$.ajax(`${apiKeys.databaseURL}/items.json?orderBy="uid"&equalTo="${uid}"`)
			.done(data => {
				let response = data;
				Object.keys(response).forEach((key) => {
					response[key].id = key;
					items.push(response[key]);
				});
				resolve(items);
			})
			.fail(error => {reject(error);});
		});
	};

	movieCall.addMovie = (apiKeys, newMovie) => {
		newMovie.uid = movieAPI.credentialsCurrentUser().uid;
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: "POST",
				url: `${apiKeys.databaseURL}/items.json`,
				data: JSON.stringify(newMovie)
			})
			.done(() => {
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	movieCall.deleteMovie = (apiKeys, id) => {
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: "DELETE",
				url: `${apiKeys.databaseURL}/items/${id}.json`
			})
			.done(() => {
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	movieCall.editMovie = (apiKeys, movie, id) => {
		movie.uid = movieAPI.credentialsCurrentUser().uid;
		return new Promise ((resolve, reject) => {
			$.ajax({
				method: "PUT",
				url: `${apiKeys.databaseURL}/items/${id}.json`,
				data: JSON.stringify(movie)
			})
			.done(() => {
				resolve();
			})
			.fail((error) => {
				reject(error);
			});
		});
	};

	return movieCall;
})(movieAPI || {});