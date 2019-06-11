'use-strict'
spa.controller('aboutCTRL', [
	'$scope', '$location', 'H',
	function($scope, $location, $h) {

		var TAG = "ABOUT CTRL::";

		$h.printInfo(TAG, "Controller Loaded!");
	}
]);