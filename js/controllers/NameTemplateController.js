app.controller('NameTemplateController', function($scope) {
	$scope.first = "";
	$scope.last = "";
	$scope.email = "";
	$scope.number = "";

	$scope.submitted = false;

	$scope.submit = function() {
		$scope.submitted = true;

		obj = {
			'first': $scope.first,
			'last': $scope.last,
			'email': $scope.email,
			'number': $scope.number
		}
		console.log(obj);
	}

});
