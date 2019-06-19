// Helper Class
spa.factory("H",[
	"$mdToast", '$mdSidenav', '$timeout', '$mdDialog',
	function ($toast, $sn, $timeout, $dialog) {

		var userType;

		function H() { 
			userType = new Array("guest", "admin", "member");
		};


		var printInfo = (text) => {
			this.printInfo("HELPER::", text);
		};
		var printInfo = (TAG, text) => {
			this.printInfo(TAG, text, "");
		};
		var printInfo = (TAG, text, more) => {
			// This will print all logs, uncomment for debugging only.
			console.log(TAG,text,more);
		};

		var showSimpleToast = (text) => {
			$toast.show(
				$toast.simple()
				.textContent(text)
				.position('top right')
				.hideDelay(1500)
			);

		};

		var openSideNav = () => {
			$timeout(function () {
				$sn('left').open();
			});
		};

		var closeSideNav = () => {
			$timeout(function () {
				$sn('left').close();
			});
		};

		var getUserType = (type) => {
			return userType.indexOf(type);
		};

		var getUserAccessLevel = (level) => {
			return userType[level];
		};

		var showConfirmDialog = (data, ev, success, failure) => {
			var confirm = $mdDialog.confirm()
							.title(data.title)
							.textContent(data.content)
							.ariaLabel('Confirm Dialog')
							.targetEvent(ev)
							.ok(data.yes)
							.cancel(data.no)
							.then(success, failure);
		};

		var showCustomDialog = (data, success, ev) => {
			$dialog.show({
				templateUrl: 'views/dialog/detailMemberDialog.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:false,
				fullscreen: true, // Only for -xs, -sm breakpoints.
				locals: {"data": data},
				controller: ['$scope', '$mdDialog', 'data', function($scope, $mdDialog, log) { 
					$scope.data = data;
				
					$scope.hide = function() {
						$mdDialog.hide();
					};

					$scope.cancel = function() {
						$mdDialog.cancel();
					};

					$scope.done = function() {
						$mdDialog.hide(data.member);
					};

				}]
			})
			.then(success);

		};

		H.prototype.printInfo = printInfo;
		H.prototype.showSimpleToast = showSimpleToast;
		H.prototype.showCustomDialog = showCustomDialog;
		H.prototype.showConfirmDialog = showConfirmDialog;
		H.prototype.openSideNav = openSideNav;
		H.prototype.closeSideNav = closeSideNav;
		H.prototype.getUserAccessLevel = getUserAccessLevel;
		H.prototype.getUserType = getUserType;

		return new H();

	}
]);