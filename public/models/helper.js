// Helper Class
spa.factory("H",[
	"$mdToast", '$mdSidenav', '$timeout',
	function ($toast, $sn, $timeout) {

		function H() { 
			this.userType = new Array("guest", "admin", "member");
		};

		H.prototype.printInfo = (text) => {
			this.printInfo("NO TAG::", text);
		};
		H.prototype.printInfo = (TAG, text) => {
			this.printInfo(TAG, text, "");
		};
		H.prototype.printInfo = (TAG, text, more) => {
			// This will print all logs, uncomment for debugging only.
			console.log(TAG,text,more);
		};

		H.prototype.showSimpleToast = (text) => {
			$toast.show(
				$toast.simple()
				.textContent(text)
				.position('top right')
				.hideDelay(1500)
			);

		};

		H.prototype.openSideNav = () => {
			$timeout(function () {
				$sn('left').open();
			});
		};

		H.prototype.closeSideNav = () => {
			$timeout(function () {
				$sn('left').close();
			});
		};

		H.prototype.getUserType = (type) => {
			if(this.userType==undefined)
				this.userType = new Array("guest", "admin", "member");
			return this.userType.indexOf(type);
		};

		H.prototype.getUserAccessLevel = function(level) {
			return this.userType[level];
		};

		return new H();

	}
]);