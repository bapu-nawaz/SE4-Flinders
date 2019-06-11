'use-strict'
spa.controller('memberCTRL', [
	'$scope', '$location', 'memberData', 'H',
	function($scope, $location, $member, $h) {

		var TAG = "Member CTRL::";

		$h.printInfo(TAG, "Controller Loaded!", $member);
		$scope.allMembers = "";

		$scope.$on('membersFetched', function( event, args) {
			$scope.allMembers = $member.arr;
			$h.printInfo(TAG, "Members: ", $scope.allMembers);
		});

	}
]);