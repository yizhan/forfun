var angular = require('angular');
var module = require('./app/module');
require('./app/router.js');

module.controller('IndexCtrl', ['$scope', function($scope) {
    $scope.$on('$stateChangeSuccess', function(){
        console.log('working');
        $scope.stateName = $state.current.name.toString();
    });
}]);

angular.bootstrap(document.body, ['myApp']);
