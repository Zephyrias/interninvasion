'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('interns/interns.json').success(function(data) {
    $scope.interns = data;
  });

  $scope.orderProp = 'name';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];


function PhoneDetailCtrl($scope, $routeParams, $http) {
   $http.get('interns/' + $routeParams.phoneId + '.json').success(function(data) {
   $scope.phone = data;
  });
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];

