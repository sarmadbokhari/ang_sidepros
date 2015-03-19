var app = angular.module('instaApp', []);

app.controller('initialController', function($scope, $http, $timeout){
	$scope.search = {
		keywords: "",
		query: "",
		submit: false,
		searchUrl: ""
	};

	$scope.updateMessage = function updateMessage(msg){
		$scope.search.message = msg;
		console.log($scope.search.message);
	};

	$scope.searchIt = function searchIt(){
		$scope.search.submit = true;
		$scope.search.query = $scope.search.keywords.split(' ').join('_');
		$scope.search.searchUrl = "https://api.instagram.com/v1/tags/" + $scope.search.query + "/media/recent";
		$scope.search.message = "Searching Instagram for photos tagged with" + $scope.search.keywords;
		$scope.search.keywords = "";

		var url = $scope.search.searchUrl;
		var request = {
			callback: 'JSON_CALLBACK',
			client_id: "32242642ece0478f8948efb65b39c5ce"
		}

		$http({
			method: "JSONP",
			url: url,
			params: request
		}).
		success(function(data){
			$scope.data = data;
			console.log("success", data);
			
			$timeout(function(){
				var msg = "Found " + data.data.length + " results";
				$scope.updateMessage(msg);
			}, 2000);
		}).
		error(function(error){
			$scope.error = true;
			console.log("error", error);
		})

	};
});