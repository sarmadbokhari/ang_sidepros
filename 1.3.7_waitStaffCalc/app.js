var app = angular.module("myApp", []);

app.controller("waitCtrl", function($scope){
	$scope.meals = {
		"example": [10,1,11]
	};

	$scope.thisMeal = {
		"mealPrice": null,
		"taxRate": null,
		"tipRate": null,
		"subTotal": null,
		"tipTotal": null,
		"totalTotal": null
	};

	$scope.myEarnings = {
		"totalTips": 1,
		"mealCount": Object.keys($scope.meals).length,
		"averageTip": null
	}

	$scope.updateEarnings = function(){
		$scope.myEarnings.totalTips = null;
		$scope.myEarnings.mealCount = Object.keys($scope.meals).length;
		for (var customer in $scope.meals){
			$scope.myEarnings.totalTips += $scope.meals[customer][1];
		}
	};

	$scope.addMeal = function(){
		var customer = "customer" + (Object.keys($scope.meals).length+1);
		$scope.meals[customer] = [$scope.thisMeal.subTotal, $scope.thisMeal.tipTotal, $scope.thisMeal.totalTotal];
		$scope.updateEarnings();
	};

	$scope.$watch('mealPrice', function(newVal, oldVal){
		$scope.thisMeal.mealPrice = newVal;

		// update totalTotal if form is already filled out
		if ($scope.thisMeal.taxRate !== null){
			$scope.thisMeal.subTotal = $scope.thisMeal.mealPrice + ($scope.thisMeal.mealPrice * ($scope.thisMeal.taxRate/100));
			$scope.thisMeal.tipTotal = $scope.thisMeal.mealPrice * ($scope.thisMeal.tipRate/100);
			$scope.thisMeal.totalTotal = $scope.thisMeal.subTotal + $scope.thisMeal.tipTotal;
		}
	});

	$scope.$watch('taxRate', function(newVal, oldVal){
		$scope.thisMeal.taxRate = newVal;
		$scope.thisMeal.subTotal = $scope.thisMeal.mealPrice + ($scope.thisMeal.mealPrice * ($scope.thisMeal.taxRate/100));

		// update totalTotal if form is already filled out
		if ($scope.thisMeal.subTotal && $scope.thisMeal.tipTotal){
			$scope.thisMeal.totalTotal = $scope.thisMeal.subTotal + $scope.thisMeal.tipTotal;
		}
	});

	$scope.$watch('tipRate', function(newVal, oldVal){
		$scope.thisMeal.tipRate = newVal;
		$scope.thisMeal.tipTotal = $scope.thisMeal.mealPrice * ($scope.thisMeal.tipRate/100);
		$scope.thisMeal.totalTotal = $scope.thisMeal.subTotal + $scope.thisMeal.tipTotal;
	});

	
	

});