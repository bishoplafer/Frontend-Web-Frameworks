angular.module("MyApp").service("dataService",function(){

	var namesArray = ['Bishop','Mercedes','Nick','Jim'];

	this.getNames = function(){
		var str = localStorage.getItem("NameLS");
		namesArray = JSON.parse(str) || namesArray;
		return namesArray;
	}

	this.addName = function(pName){
		namesArray.push(pName);
		var str = JSON.stringify(namesArray);
		localStorage.setItem("NameLS",str);
	}

	this.removeName = function(pName){
		namesArray.splice(namesArray.indexOf(pName),1);
		var str = JSON.stringify(namesArray);
		localStorage.setItem("NameLS",str);
	}

});