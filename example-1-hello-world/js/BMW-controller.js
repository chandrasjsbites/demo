// JavaScript Document: ParentController

var app = angular.module("myApp");  //Get registred module in app.js

//Register controller function
app.controller('BMWController',['$scope', '$rootScope', function($scope, $rootScope){
    $scope.name = 'BMW Motor';
	$scope.type = 'Vehicle';
}]);


