// (function(){
//     'use strict';

//     angular
//         .module('app')
//         .config(configConfig);

//     configConfig.$inject = ['$routeProvider','$locationProvider'];

//     function configConfig($routeProvider, $locationProvider) {
//         $locationProvider.html5Mode(true);

//         $routeProvider
//         .when("/", {
//             templateUrl : "../partials/main.html"
//         })
//         .when("/cart", {
//             templateUrl : "../partials/cart.html"
//         })
//         .when("/main", {
//             templateUrl : "../partials/main.html"
//         })
//         .otherwise({
//             templateUrl : "../partials/main.html"
//         });
        
//     }

// }());