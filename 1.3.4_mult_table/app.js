var app = angular.module("multApp", []);

app.controller("MultCtrl", function($scope, $attrs, $rootScope){
	function popNumbers(amount){
		var numbers = [];
		for (var i = 0; i < amount; i++){
			numbers[i] = i+1;
		}
		return numbers;
	}

	$scope.compute = function(a,b){
		return a * b;
	}

	$scope.numberLimit = $attrs.initialAmount || 10;

	$scope.$watch('numberLimit', function(limit){
		$scope.numbers = popNumbers(limit);
	});

	var activeFactorA, activeFactorB;
	$scope.setActiveFactors = function(a,b){
		activeFactorA = a;
		activeFactorB = b;
	}
	$scope.matchesFactors = function(a,b){
		return a === activeFactorA || b === activeFactorB;
	}

	$scope.clearActiveFactors = function(){
		activeFactorA = activeFactorB = null;
	}

	$scope.setActiveNumber = function(number){
		$rootScope.$broadcast('displayData', number);
	}

});

app.controller("DisplayCtrl", function($scope){
	$scope.$on("displayData", function(event, data){
		$scope.content = data;
		console.log(data);
	})
});