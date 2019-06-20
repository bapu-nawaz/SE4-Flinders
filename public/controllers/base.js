'use-strict'
spa.controller('baseCTRL', [
	'$scope', '$location', 'H',
	function($scope, $location, $h) {

		$scope.navItems = [{
			name: 'committee',
			label: 'Committee',
			icon: 'img/icons/committee.svg',
			pageContent: 'Committee'
		},{
			name: 'member',
			label: 'Members',
      		icon: 'img/icons/member.svg',
			pageContent: 'List of Members'
		}/*,{
			name: 'about',
			label: 'About',
      icon: 'img/icons/about.svg',
			pageContent: 'About Us'
		},{
			name: 'faq',
			label: 'FAQs',
      icon: 'img/icons/faq.svg',
      pageContent: 'Frequently Asked Questions'
		}*/];
		var TAG = "BASE CTRL::";

		var getNavInfo = (url) => {
      		var found = false;
			angular.forEach($scope.navItems, function(item){
				if(item.name==url) {
					$scope.navigate(item);
					found = true;
        		}
			});
		    
		    if(!found)
        		$scope.selectedNav = "none";
		}

		$scope.navigate = (item) => {
			$scope.selectedNav = item.name;
			$location.path(item.name);
			$scope.pageContent = item.pageContent;
			$h.closeSideNav();
		}

		$scope.openSideNav = () => {
			$h.openSideNav();
		}

		getNavInfo($location.$$url.split("/")[1]);
		$h.printInfo(TAG, "Controller Loaded!");
	}
]);