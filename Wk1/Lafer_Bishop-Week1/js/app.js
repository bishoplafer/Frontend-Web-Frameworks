function MyController($scope){

	$scope.myGrocery;

	$scope.groceryArray = ['Brocolli','Potatos','Cheese','Milk'];

	$scope.addGrocery = function(){
		$scope.groceryArray.push($scope.myGrocery);

		$scope.myGrocery = '';
	};

	$scope.deleteGrocery = function(deletedGrocery){

			var idx = $scope.groceryArray.indexOf(deletedGrocery);
			$scope.groceryArray.splice(idx,1);
			
	}

}