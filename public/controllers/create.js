'use-strict'
spa.controller('createCTRL', [
	'$scope', '$location', 'newsData', 'H',
	function($scope, $location, $data, $h) {

		$scope.new = {
			title: "",
			author: "",
			content: "",
			tags: "",
      dated: ""
		};
		$scope.tags = [];
    $scope.now = new Date();

		var TAG = "CREATE CTRL::";
		var arrayToString = (array) => {
			var string = "";
			angular.forEach(array, function(item){
				string = string.replace(".", ", ");
				string += item + ".";
			});
			string = string.replace(".", "");
			return string;
		}

		$scope.postData = () => {
			$scope.news.tags = arrayToString($scope.tags);
      var date = new Date();
      $scope.news.dated = date.toISOString();
			$h.printInfo(TAG, "Data:", $scope.news);
			$data.add($scope.news);
		}

		$scope.name = "CREATE";
		$h.printInfo(TAG, "Controller Loaded!");
	}
]);