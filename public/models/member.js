'use-strict'
spa.factory("memberData",[
	"$http", "$q", "H", "$rootScope", "$firebaseArray",
	function ($http, $q, $h, $rootScope, $fbArray) {

		function memberData() { 
			this.arr = [];
			this.TAG = "Member Model::";

			this.fetchAllMembers(this.arr);
		};

		var setMembers = (data) => {
			$h.printInfo(this.TAG, "Set Members Called", data.length);
			for(var x=0; x<data.length; x++) {
				$h.printInfo(this.TAG, "Iteration("+x+")", this.arr);
				this.arr.push(data[x]);
			}

			$rootScope.$broadcast('membersFetched');
		};

		memberData.prototype.getAllMembers = (first_argument) => {
			return this.arr;
		};

		memberData.prototype.fetchAllMembers = (arr) => {
			if(this.arr==undefined) 
				this.arr = arr;
			$h.printInfo(this.TAG, "Get Data Called", this.arr);
			var ref = firebase.database().ref().child('member');

			$fbArray(ref).$loaded().then( res => {
				$h.printInfo(this.TAG, "DataLoaded-Response:",res);
				setMembers(res);
			}, err => {
				printInfo("DataLoaded-Error:",err);
			});
		};

		return new memberData();

	}
]);