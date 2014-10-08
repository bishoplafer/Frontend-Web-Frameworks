(function(){
var app = angular.module('store',[]);

app.controller('StoreController', function(){
	this.products = gems;
});

var gems = [

	{
		name: 'Dodecahedron',
		price: 2.95,
		description: 'fasdfasdfasdfas asdfasdfasdf',
		canPurchase: true,
		soldOut: false,
	},

	{
		name: 'Shiny Rock',
		price: 4.50,
		description: 'One Big Shiny Rock',
		canPurchase: true,
		soldOut: false,
	}

];
})();