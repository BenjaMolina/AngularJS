angular.module("MiPrimerApp",[]) // El segundo parametro hace referencia a los demas modulos que este depende 
.controller("FirsController",function($scope){
	$scope.nombre = "Benjamin Molina";
	$scope.nuevoComentario = {};
	$scope.comentarios = 
	[
		{
			comentario: "Buen Tutorail",
			username: "CodigoFacilito"

		},
		{
			comentario: "Malisimo Tutorail",
			username: "otro_usuario"
		}
	];

	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});