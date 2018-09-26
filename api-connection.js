var api_connection = {
	datAxios: {},
	get: function(path) {
		path = path.join("/");
		this.datAxios.get(path) 
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	post: function(path, _data) {
		path = path.join("/");
		this.datAxios.post(path, _data) 
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	initialize: function(_baseURL) {	
		this.datAxios = axios.create({
		  baseURL: _baseURL
		});
	}
};








