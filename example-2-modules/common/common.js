// Load existing common module

var common = angular.module('common');
common.filter('string', function(){
     return function(str) {
         return str.toString();
     };
});

common.filter('trimString', function(){
     return function(str, start, end) {
         return str.slice(start, end);
     };
});
