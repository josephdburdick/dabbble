"use strict";

var app = angular.module('dabbble', ['dabbble.controllers']);

app.config(function($routeProvider){
	$routeProvider
		.when("/:list",{ controller: "ShotsListCtrl", templateUrl: "partials/shots_list.html" })
		.otherwise({redirectTo: "/popular"});
})