// Helper Class
spa.factory("H",[
	"$mdToast", '$mdSidenav', '$timeout',
	function ($toast, $sn, $timeout) {

		function H() { 
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

		return new H();

	}
]);