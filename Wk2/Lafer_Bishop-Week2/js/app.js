angular.module("EmployeeDirectory",[]).controller("MyController",function($scope,dataService){

	$scope.myEmployee;

	$scope.employeeArray = dataService.getEmployees();

	$scope.addEmployee = function(){
		dataService.addEmployee($scope.myEmployee);

		$scope.myEmployee = '';
	}

	$scope.deleteEmployee = function(deletedEmployee){

		dataService.removeEmployee(deletedEmployee);
			
	}

});