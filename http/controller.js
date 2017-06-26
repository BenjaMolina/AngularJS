angular.module("MiPrimerApp",[]) // El segundo parametro hace referencia a los demas modulos que este depende 
.controller("FirsController",function($scope,$http){
	$scope.posts = [];
	$http.get("https://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){

		});
});