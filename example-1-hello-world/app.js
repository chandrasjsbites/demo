/* JavaScript Document : App Js for instantiating Angular module*/

angular.module("myApp", []);

angular.module('myApp').controller('mainCtrl', ['$scope', function($scope){
    $scope.contacts = [{ firstName: 'Chandra',
                          contactEmail: 'chandra@gmail.com'
                        }, {
                            firstName: 'Jay',
                            contactEmail: 'jay@gmail.com'
                        },
                       {
                            firstName: 'Chaitanya',
                            contactEmail: 'chaitanya@gmail.com'
                        }];
    $scope.addContact = function(obj){
       $scope.contacts.push(obj);
           
    };
    
    $scope.name = 'red';
    
    
    
    $scope.$watch('color', function(newVal, oldVal){
        console.log('color', newVal, oldVal);
    }, true);
    
        
}]);


