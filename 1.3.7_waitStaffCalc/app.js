var app = angular.module("myApp", []);

app.controller("waitCtrl", function($scope){
	$scope.meals = {
		"example": [10,20,30]
	};

	$scope.addMeal = function(){
		var customer = "customer" + (Object.keys($scope.meals).length+1);
		$scope.meals[customer] = [$scope.mealPrice, $scope.taxRate, $scope.tipRate];
	};

});