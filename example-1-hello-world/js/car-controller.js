// JavaScript Document: ParentController

var app = angular.module("myApp");  //Get registred module in app.js

//Register controller function
app.controller('CarController',['$scope', '$rootScope', function($scope, $rootScope){
    $scope.name = 'Car';
	$scope.type = 'Vehicle';
}]);


