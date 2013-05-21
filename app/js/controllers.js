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
	}).error(function(data) {
		window.location = "/app/index.html";
	});
}

//PhoneDetailCtrl.$inject = ['$scope', '$routeParams', '$http'];


function GalleryController($scope, $routeParams, $http){
	var IMAGE_WIDTH = 410;

	$http.get('interns/' + $routeParams.phoneId + '.json').success(function(data) {
		$scope.additional = data.additional;
		$scope.selected = data.additional[0];
	});

	$scope.scrollTo = function(entry, ind) {
		$scope.listposition = {left:(IMAGE_WIDTH * ind * -1) + "px"};
		$scope.selected = entry;
	};

};