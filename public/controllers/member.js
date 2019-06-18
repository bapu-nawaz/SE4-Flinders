'use-strict'
spa.controller('memberCTRL', [
	'$scope', '$location', 'memberData', 'H', '$routeParams',
	function($scope, $location, $member, $h, $rp) {

		var TAG = "Member CTRL::";
		$h.openSideNav();

		$h.printInfo(TAG, "Controller Loaded!", $h.getUserAccessLevel($rp.type));
		$scope.allMembers = "";
		$scope.userType = $rp.type;// $h.getUserAccessLevel($rp.type);

		$scope.$on('membersFetched', function( event, args) {
			$scope.allMembers = $member.arr;
			$h.printInfo(TAG, "Members: ", $scope.allMembers);
		});

	}
]);