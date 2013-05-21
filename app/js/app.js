'use strict';

/* App Module */

angular.module('phonecat', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/interns', {templateUrl: 'partials/intern-list.html',   controller: PhoneListCtrl}).
      when('/interns/:phoneId', {templateUrl: 'partials/intern-detail.html', controller: PhoneDetailCtrl}).
      otherwise({redirectTo: '/interns'});
}]);
