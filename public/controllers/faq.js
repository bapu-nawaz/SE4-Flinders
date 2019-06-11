'use-strict'
spa.controller('faqCTRL', [
	'$scope', '$location', '$anchorScroll', 'H',
	function($scope, $location, $anchorScroll, $h) {

		var TAG = "FAQ CTRL::";
    
    $scope.gotoAnchor = function(x) {
      var newHash = 'anchor' + x;
      if ($location.hash() !== newHash) {
        // set the $location.hash to `newHash` and
        // $anchorScroll will automatically scroll to it
        $location.hash('anchor' + x);
      } else {
        // call $anchorScroll() explicitly,
        // since $location.hash hasn't changed
        $anchorScroll();
      }
    };
    
    $scope.faqList = [{
      id: "link1",
      title: "Link 1",
      content: "Link 1 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link2",
      title: "Link 2",
      content: "Link 2 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link3",
      title: "Link 3",
      content: "Link 3 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link4",
      title: "Link 4",
      content: "Link 4 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link5",
      title: "Link 5",
      content: "Link 5 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link6",
      title: "Link 6",
      content: "Link 6 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link7",
      title: "Link 7",
      content: "Link 7 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link8",
      title: "Link 8",
      content: "Link 8 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link9",
      title: "Link 9",
      content: "Link 9 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link10",
      title: "Link 10",
      content: "Link 10 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link11",
      title: "Link 11",
      content: "Link 11 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link12",
      title: "Link 12",
      content: "Link 12 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link13",
      title: "Link 13",
      content: "Link 13 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link14",
      title: "Link 14",
      content: "Link 14 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link15",
      title: "Link 15",
      content: "Link 15 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link16",
      title: "Link 16",
      content: "Link 16 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    },{
      id: "link17",
      title: "Link 17",
      content: "Link 17 content can go here but your choice mate what ever you think is best, although you are still wasting time doing this on the first place."
    }]

		$scope.name = "FAQ";
		$h.printInfo(TAG, "Controller Loaded!");
	}
]);