'use-strict'
spa.factory("memberData",[
	"$http", "$q", "H", "$rootScope",
	function ($http, $q, $h, $rootScope) {

		var arr;
		var database
		var dataset;
		var TAG;

		function memberData() { 
			arr = [];
			dataset = "member";
			database = firebase.database().ref(dataset);
			TAG = "Member Model::";

			fetchAllMembers();
		};

		var addMember = (member) => {
			database.push()
			.set(member)
			.then((snapshot)=>{
				$h.printInfo(TAG, snapshot);
				fetchAllMembers();
			});
		};

		var deleteMember = uid => {
			database.child(uid).update({isDeleted: true})
			.then( res => {
				for(var i=0; i<arr.length; i++)
					if( arr[i].uid==uid )
						arr.splice(i, 1);
				$rootScope.$broadcast('membersFetched');
			});
		}

		var fetchAllMembers = () => {
			database.once('value').then( res => {
				$h.printInfo(TAG, "DataLoaded-Response:", res.numChildren());
				res.forEach(child => {
					var member = child.val();
					member['uid'] = child.key;
					arr.push(member);
				});
				$rootScope.$broadcast('membersFetched');
			}, err => {
				$h.printInfo("DataLoaded-Error:",err);
			});
		};

		var getAllMembers = () => {
			return arr;
		};

		var memberModel = () => {
			return {
				"date_elected": '',
				"electorate": '',
				"email": '',
				"house": '',
				"name": '',
				"political_party": '',
				"position": ''
			};
		};

		var updateMember = (member) => {
			var uid = member.uid;
			database.child(uid)
			.update({ // NOTE: passing an Object will not work, you have to create one at the time of execution
				"date_elected": member.date_elected,
				"electorate": member.electorate,
				"email": member.email,
				"house": member.house,
				"name": member.name,
				"political_party": member.political_party,
				"position": member.position
			}).then( res => {
				$h.printInfo(TAG, "Update Member SUCCESS", res)
				for(var i=0; i<arr.length; i++)
					if( arr[i].uid==uid )
						arr[i] = member;
				$rootScope.$broadcast('membersFetched');
			}, err => {
				$h.printInfo(TAG, "Update Member Failed", err)
			});
		};

		memberData.prototype.addNewMember = addMember;
		memberData.prototype.deleteMember = deleteMember;
		memberData.prototype.getAllMembers = getAllMembers;
		memberData.prototype.newMemberDetails = memberModel;
		memberData.prototype.updateMemberDetails = updateMember;

		return new memberData();

	}
]);