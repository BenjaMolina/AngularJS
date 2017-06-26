angular.module("MiPrimerApp",[]) // El segundo parametro hace referencia a los demas modulos que este depende 
.controller("FirsController",["$scope",function(s){
	s.nombre = "Benjamin Molina";
	s.nuevoComentario = {};
	s.comentarios = 
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

	s.agregarComentario = function(){
		s.comentarios.push(s.nuevoComentario);
		s.nuevoComentario = {};
	}
}]);