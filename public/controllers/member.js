'use-strict'
spa.controller('memberCTRL', [
	'$scope', '$location', 'memberData', 'H', '$routeParams',
	function($scope, $location, $member, $h, $rp) {

		var TAG = "Member CTRL::";

		$h.printInfo(TAG, "Controller Loaded!", $h.getUserAccessLevel($rp.type));
		$scope.allMembers = "";
		$scope.userType = $rp.type;// $h.getUserAccessLevel($rp.type);

		$scope.openDetailed = (member) => {
			var data = {
				'member': member,
				'edit': false,
				'title': 'Member Detail',
				'submit': 'Close'
			};

			$h.showCustomDialog(data, (res)=>{
				$h.printInfo(TAG, "Response", res);
			});
		};

		$scope.editDetail = (member) => {
			var data = {
				'member': member,
				'edit': true,
				'title': 'Member Detail',
				'submit': 'Save'
			};

			$h.showCustomDialog(data, (memberDetails)=>{
				$h.printInfo(TAG, "Update Member:", memberDetails);
				$member.updateMemberDetails(memberDetails);
			});
		};

		$scope.addMember = () => {
			var data = {
				'member': $member.newMemberDetails(),
				'edit': true,
				'title': 'Member Detail',
				'submit': 'Add New Member'
			};

			$h.showCustomDialog(data, (newMember)=>{
				$h.printInfo(TAG, "Add New Member:", newMember);
				$member.addNewMember(newMember);
			});
		};

		$scope.deleteMember = member => {
			var data = {
				'title': 'Confirm Delete',
				'content': 'Are you sure you want to remove "'+member.name+'" from members?',
				'yes': 'Confirm Delete',
				'no': 'Cancel'
			};
			$h.showConfirmDialog(data, () => {
				$member.deleteMember(member.uid);
			}, () => {
				$h.showSimpleToast("You cancelled the deletion");
			});
		}

		$scope.$on('membersFetched', function( event, args) {
			$scope.allMembers = $member.getAllMembers();
			$scope.$apply();
		});
	}
]);