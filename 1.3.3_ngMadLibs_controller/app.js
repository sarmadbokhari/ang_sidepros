var app = angular.module('ngMadLibs', []);

app.controller('madController', function($scope){
	$scope.gender = "male";

	$scope.changeGender = function(){
		$scope.gender === "male" ? $scope.gender = "female" : $scope.gender = "male";
		// if ($scope.gender === "male"){
		// 	$scope.gender = "female";
		// } else {
		// 	$scope.gender = "male";
		// }
	}

	$scope.madlibs = {
		male_name: "MALE NAME",
		female_name: "FEMALE NAME",
		job_title: "JOB TITLE",
		tedious_task: "TEDIOUS TASK",
		dirty_task: "DIRTY TASK",
		celebrity: "CELEBRITY",
		useless_skill: "USELESS_SKILL",
		obnoxious_celebrity: "OBNOXIOUS CELEBRITY",
		huge_number: "HUGE NUMBER",
		adjective: "ADJECTIVE"
	};

});