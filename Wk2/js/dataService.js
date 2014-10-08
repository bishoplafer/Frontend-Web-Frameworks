angular.module("EmployeeDirectory").service("dataService",function(){

	var employeesArray = ['Bishop','Matt','Mike','Amanda'];

	this.getEmployees = function(){
		return employeesArray;
	};

	this.addEmployee = function(pEmployee){
		employeesArray.push(pEmployee);
	};

	this.removeEmployee = function(pEmployee){
		employeesArray.splice(employeesArray.indexOf(pEmployee),1);
	};

});