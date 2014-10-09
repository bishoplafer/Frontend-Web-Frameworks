angular.module("EmployeeDirectory").service("dataService",function(){

	var employeesArray = [
	{
		name:'Bishop',
		phone: '541-777-0813',
	},
	{
		name:'Matt',
		phone:'123-456-7890',
	},
	{
		name:'Mike',
		phone: '123-456-7890',
	},
	{
		name:'Amanda',
		phone:'123-456-7890',
	}];

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