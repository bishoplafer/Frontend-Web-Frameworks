angular.module("EmployeeDirectory",[]).controller("MyContoller",function($scope,dataService){

	$scope.myEmployee;

	$scope.employeeArray = ['Bishop','Matt','Mike','Amanda'];

	$scope.addEmployee = function(){
		dataService.addEmployee($scope.myEmployee);

		$scope.myEmployee = '';
	}

	$scope.deleteEmployee = function(deletedEmployee){

		dataService.removeEmployee(deletedEmployee);
			
	}

});