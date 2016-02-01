var app = angular.module('passwordManager', []);

app.controller('SaveAccountController', ['$scope', function($scope) {
	$scope.submit = function() {
		$scope.account = $scope.account;
		$scope.username = $scope.username;
		$scope.password = $scope.password;
		$scope.masterPassword = $scope.masterPassword;

		if($scope.account && $scope.username && $scope.password && $scope.masterPassword) {
			alert('Your account name is: ' + $scope.account + '\n' +
						'Your username is: ' + $scope.username + '\n' +
						'Your password is: ' + $scope.password + '\n' +
						'Your master password is: ' + $scope.masterPassword);
		} else {
			alert("you're missing something");
		}
		
		$scope.password = '';
		$scope.masterPassword = '';
	};

}]);

app.controller('GetAccountController', ['$scope', function($scope) {
	$scope.yo = 'world';
}]);