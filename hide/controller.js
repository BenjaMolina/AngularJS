angular.module("MiPrimerApp",[]) // El segundo parametro hace referencia a los demas modulos que este depende 
.controller("FirsController",function($scope,$http){
	$scope.posts = [];
	$scope.loading = true;

	$http.get("https://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;	
			$scope.loading = false;
		})
		.error(function(err){
			$scope.loading = false;
		});
});