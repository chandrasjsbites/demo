// JavaScript Document: ParentController

var app = angular.module("myApp");  //Get registred module in app.js

//Register controller function
app.controller('mainCtrl',['$scope', '$filter', function($scope, $filter){
   $scope.pi = $filter('string')('chandra');
   $scope.myStr = "Default String";
    
  
    $scope.$watch('myStr', function(newVal, oldVal){
       $scope.trimmedStr = $filter('trimString')(newVal, 0,3);
    }, true);
    
        
}]);