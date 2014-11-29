// [module names]
var app = angular.module('KiddApp', ['ui.router', 'ngTouch']); 

// app.config(["$stateProvider", "$urlRouterProvider", "$locationProvider",
// 	function($stateProvider, $urlRouterProvider, $locationProvider) {

//   $urlRouterProvider.otherwise("/"); // render home if no other hits for state

//   $stateProvider
//     .state('home', {
//       url: '/',
//       templateUrl: '/views/home.html'
//     })
//     .state('blog', {
//       url: '/blog',
//       title: 'Blog',
//       templateUrl: '/views/blog.html'
//     })
//     .state('schadenfreude', {
//       url: '/schadenfreude',
//       title: 'Schadenfreude',
//       templateUrl: '/views/schadenfreude.html'
//     })
// }]);