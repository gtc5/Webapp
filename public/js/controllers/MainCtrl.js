angular.module('MainCtrl', ['ui.bootstrap']).controller('MainController', function($scope, $http) {

	var url_volunteers = "https://gtc5.clive.io/admin/volunteers?callback=JSON_CALLBACK";
	var url_donors = "https://gtc5.clive.io/admin/donors?callback=JSON_CALLBACK";
	var url_deliveries = "https://gtc5.clive.io/admin/deliveries?callback=JSON_CALLBACK";	

	$http.jsonp(url_volunteers).success(function(data){
		$scope.volunteers = data;
	});
	$http.jsonp(url_donors).success(function(data){
		$scope.donors = data;
	});
	$http.jsonp(url_deliveries).success(function(data){
		$scope.deliveries = data;
	});

	setInterval(function(){
		$http.jsonp(url_volunteers).success(function(data){
			$scope.volunteers = data;
		});
		$http.jsonp(url_donors).success(function(data){
			$scope.donors = data;
		});
		$http.jsonp(url_deliveries).success(function(data){
			$scope.deliveries = data;
		});
		$scope.$apply();
	}, 5000);
});
