var angular = require('angular');
var module = require('./module');

require('./states/home/HomeCtrl.js');
require('./states/about/AboutCtrl.js');

module.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('/home',{
            url:'/home',
            template:require('./states/home/homeView.html'),
            controller:'HomeCtrl'
        })
        .state('/about',{
            url:'/about',
            templateUrl:'/app/states/about/AboutView.html',
            controller:'AboutCtrl'
        });
});
