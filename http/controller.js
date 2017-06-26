angular.module("MiPrimerApp",[]) // El segundo parametro hace referencia a los demas modulos que este depende 
.controller("FirsController",function($scope,$http){
	$scope.posts = [];
	$scope.newPost = {};

	$http.get("https://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			$scope.posts = data;
		})
		.error(function(err){

		});

	$scope.addPost = function(){
		$http.post("https://jsonplaceholder.typicode.com/posts",{
			title: $scope.newPost.title,
			body: $scope.newPost.body,
			userId: 1
		})
		.success(function(data,status,headers,config){
			console.log(data);
			$scope.posts.push(data);
			$scope.newPost = {};
		})
		.error(function(error,status,headers,config){
			console.log(error);
		});
	}
});