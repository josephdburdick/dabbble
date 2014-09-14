'use strict';

var controllers = angular.module('dabbble.controllers',[]);

controllers.controller('AppCtrl', function ($scope) {
	$scope.name = "Module";
});

controllers.controller('ShotsListCtrl', function ($scope, dribbble, $routeParams){
	var list = $routeParams.list;

	dribbble.list(list).then(function(data){
		$scope.list = data.data;
		console.log(data);
	});
});

controllers.controller('ShotsCtrl', function ($routeParams, $scope, dribbble){ 
	// order of arguments don't matter;       ^ it looks them up by name ^ 
	var id = $routeParams.id;
	dribbble.shot(id).then(function(data){
		$scope.shot = data.data;
		console.log(data);
	});
});
