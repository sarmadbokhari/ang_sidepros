var app = angular.module("multApp", []);

app.controller("multController", function($scope, $attrs){
	function popNumbers(amount){
		var numbers = [];
		for (var i = 0; i < amount; i++){
			numbers[i] = i+1;
		}
		return numbers;
	}

	$scope.numberLimit = $attrs.initialAmount || 10;

	$scope.$watch('numberLimit', function(limit){
		$scope.numbers = popNumbers(limit);
	});

})