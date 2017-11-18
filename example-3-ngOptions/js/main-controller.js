// JavaScript Document: ParentController

var app = angular.module("myApp");  //Get registred module in app.js

//Register controller function
app.controller('mainController',['$scope', '$rootScope', function($scope, $rootScope){
    $scope.items = [{name: 'one', age: 30 },{ name: 'two', age: 27 },{ name: 'three', age: 50 }];
    
    $scope.object = {
    'one': 30,
    'two': 27,
    'three': 50,
    'four': 15,
    'five': 27,
    'six': 30
   };
}]);


