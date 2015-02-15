var app = angular.module('ngMadLibs', []);

app.controller('madController', function($scope){
    $scope.master = {};
    
    $scope.resetForm = function(){
        $scope.madlibs = angular.copy($scope.master);
        $scope.madForm.$submitted = false;
    };
    
	$scope.gender = "male";

	$scope.changeGender = function(){
		$scope.gender === "male" ? $scope.gender = "female" : $scope.gender = "male";
	}

//	$scope.madlibs = {
//		male_name: "MALE NAME",
//		female_name: "FEMALE NAME",
//		job_title: "JOB TITLE",
//		tedious_task: "TEDIOUS TASK",
//		dirty_task: "DIRTY TASK",
//		celebrity: "CELEBRITY",
//		useless_skill: "USELESS_SKILL",
//		obnoxious_celebrity: "OBNOXIOUS CELEBRITY",
//		huge_number: "HUGE NUMBER",
//		adjective: "ADJECTIVE"
//	};

});