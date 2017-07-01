angular.module("mainModule",[])
	.filter("removeHtml",function(){
		return function(texto){
			return String(texto).replace(/<[^>]+>/gm,'');
		}
	})
	.controller("FilterController",function($scope){
		//$scope.mi_html = "<p>Hola Mundo</p>";

		$scope.mi_html = {};
		$scope.mi_html.title = "hola";
		$scope.mi_html.body = "Hola223";
		$scope.costo = 2;
	});