angular.module('MainCtrl', ['ui.bootstrap']).controller('MainController', function($scope, $http) {

	var url_volunteers = "http://localhost:33033/admin/volunteers?callback=JSON_CALLBACK";
	var url_donors = "http://localhost:33033/admin/donors?callback=JSON_CALLBACK";
	var url_deliveries = "http://localhost:33033/admin/deliveries?callback=JSON_CALLBACK";	

	$http.jsonp(url_volunteers).success(function(data){
		$scope.volunteers = data;
		console.log(data);
	});
	$http.jsonp(url_donors).success(function(data){
		$scope.donors = data;
	});
	$http.jsonp(url_deliveries).success(function(data){
		$scope.deliveries = data;
	});
});