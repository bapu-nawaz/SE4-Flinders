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
			$scope.allMembers = $member.getAllMembers();
		});

		$scope.openDetailed = (member) => {
			var data = {
				'member': member,
				'edit': false,
				'title': 'Member Detail'
			};

			$h.showCustomDialog(data, (res)=>{
				$h.printInfo(TAG, "Response", res);
			});
		};

		$scope.editDetail = (member) => {
			var data = {
				'member': member,
				'edit': true,
				'title': 'Member Detail'
			};

			$h.showCustomDialog(data, (res)=>{
				firebase.database().ref("member").on("value")
				.then((snapshot)=>{
					$h.printInfo(TAG, snapshot.key);
				});
			});
		};
	}
]);