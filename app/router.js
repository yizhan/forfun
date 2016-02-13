var angular = require('angular');
var module = require('./module');

require('./states/home/HomeCtrl.js');
require('./states/about/AboutCtrl.js');
require('./states/color-picker/color-picker-directive.js');

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
            template: require('./states/about/AboutView.html'),
            controller:'AboutCtrl'
        });
});
