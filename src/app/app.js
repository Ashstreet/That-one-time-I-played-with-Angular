
angular.module('skillstest', [
  'ngRoute',
  'skillstest.todo'
])
.config(function ($routeProvider) {
  'use strict';
  $routeProvider
    .when('/todo', {
      controller: 'TodoCtrl',
      templateUrl: '/skillstest/todo/todo.html'
    })
    .otherwise({
      redirectTo: '/todo'
    });
});