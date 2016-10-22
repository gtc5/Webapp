angular.module('MainCtrl', []).controller('MainController', function($scope, $http) {

	var url = ""
	$http.jsonp(url).success(function(data){
		$scope.items = data;
	})
});