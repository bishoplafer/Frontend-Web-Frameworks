angular.module("EmployeeDirectory").service("dataService",function(){

	var employeesArray = [
	{
		name:'Bishop',
		position:'Web Development and Design Student',
		phone:'541-777-0813',
		streetAddress:'123 High St',
		city:'Eugene',
		state:'Oregon',
		zip:'97404',
	},
	{
		name:'Brandon',
		position:'Customer Service Representative',
		phone:'123-456-7890',
		streetAddress:'123 High St',
		city:'Eugene',
		state:'Oregon',
		zip:'97404',
	},
	{
		name:'Stephanie',
		position:'Manager',
		phone: '123-456-7890',
		streetAddress:'123 High St',
		city:'Eugene',
		state:'Oregon',
		zip:'97404',
	},
	{
		name:'Mercedes',
		position:'Customer Service Representative',
		phone:'123-456-7890',
		streetAddress:'123 High St',
		city:'Eugene',
		state:'Oregon',
		zip:'97404',
	}];

	this.getEmployees = function(){
		var str = localStorage.getItem("EmployeeLS");
		employeesArray = JSON.parse(str) || employeesArray;
		return employeesArray;
	};

	this.addEmployee = function(pEmployee){
		employeesArray.push(pEmployee);
		var str = JSON.stringify(employeesArray);
		localStorage.setItem("EmployeeLS",str);
	};

	this.removeEmployee = function(pEmployee){
		employeesArray.splice(employeesArray.indexOf(pEmployee),1);
		var str = JSON.stringify(employeesArray);
		localStorage.setItem("EmployeeLS",str);
	};

});