angular.module("myFirstApp",[])
	.run(function($rootScope){
		$rootScope.nombre = "Benjamin";
	})
	.controller("firsController",function($scope){
		$scope.nombre = "Benjamin Molina";
	})
	.controller("childController",function($scope){

	});
