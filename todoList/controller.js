angular.module("ToDoList",["LocalStorageModule"])
.controller("ToDoController",function($scope,localStorageService){
	if(localStorageService.get("angular-todolist")){
		$scope.todo = localStorageService.get("angular-todolist")
	}else{
		$scope.todo = [];
	}
	/*
		descripcion: "Terminar el curso Angular"
		fecha: '3-03-2017 2:00 pm'
	*/

	//La funcion WatchCollection se ejecuta cada vez que se modifica el objeto (todo)
	// Y nos sirve para reducir codigo tambien
	$scope.$watchCollection('todo',function(newValue,oldValue){
		localStorageService.set("angular-todolist",$scope.todo);
	});
	$scope.addActv = function(){
		$scope.todo.push($scope.newActv);
		$scope.newActv = {};
		//localStorageService.set("angular-todolist",$scope.todo);	
	}

	$scope.clear = function(){
		$scope.todo = [];
		//localStorageService.set("angular-todolist",$scope.todo);
	}
});