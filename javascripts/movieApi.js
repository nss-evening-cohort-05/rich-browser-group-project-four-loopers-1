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

	oldFbApi.addMovie = (apiKeys, newTodo) => {
		newMovie.uid = FbApi.credentialsCurrentUser().uid;
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

	oldFbApi.deleteMovie = (apiKeys, id) => {
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

	oldFbApi.editMovie = (apiKeys, movie, id) => {
		movie.uid = FbApi.credentialsCurrentUser().uid;
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