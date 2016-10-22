angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	var url = "http://q4modules.herokuapp.com/social/stream/box?callback=JSON_CALLBACK"
	$http.jsonp(url).success(function(data){
		$scope.items = data;
	})
});