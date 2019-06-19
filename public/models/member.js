'use-strict'
spa.factory("memberData",[
	"$http", "$q", "H", "$rootScope", 
	function ($http, $q, $h, $rootScope) {

		var arr;
		var TAG;

		function memberData() { 
			arr = [];
			TAG = "Member Model::";

			fetchAllMembers();
		};

		var getAllMembers = () => {
			return arr;
		};

		var fetchAllMembers = () => {
			var ref = firebase.database().ref('member');

			ref.once('value').then( res => {
				$h.printInfo(TAG, "DataLoaded-Response:", res.numChildren());
				arr = res.val();
				$rootScope.$broadcast('membersFetched');
			}, err => {
				$h.printInfo("DataLoaded-Error:",err);
			});
		};

		memberData.prototype.getAllMembers = getAllMembers;
		memberData.prototype.fetchAllMembers = fetchAllMembers;

		return new memberData();

	}
]);