'use-strict'
spa.controller('loginCTRL', [
	'$scope', '$location', 'H',
	function($scope, $location, $h) {

		var TAG = "LOGIN CTRL::";
		$h.printInfo(TAG, "Controller Loaded!");
    	$h.closeSideNav();

    	$scope.login = {
    		'name': '',
    		'pass': ''
    	};

    	$scope.error = {
    		'state': false,
    		'msg': "All fields are required!"
    	}

    	var setError = (msg) => {
			$scope.error.state = true;
			$scope.error.msg = msg;
    	}

    	$scope.loginGuest = () => {
			$location.path('member/0');
    	};

    	$scope.signIn = () => {
			$scope.error.state = false;
    		if($scope.login.name=='') {
    			setError("All fields are required!");
    			return;
    		}

    		var ref = firebase.database().ref("user");
			ref.once("value")
			  .then(function(snapshot) {
			    var a = snapshot.numChildren(); // 1 ("name")
			    var b = snapshot.child($scope.login.name).numChildren(); // 2 ("first", "last")
			    $h.printInfo(TAG, a, snapshot.key);
			    $h.printInfo(TAG, b);
			    snapshot.forEach(function(childSnapshot){
			    	if( $scope.login.name == childSnapshot.val().name ) 
			    		if( $scope.login.pass == childSnapshot.val().pass ) 
			    			firebase.auth().signInAnonymously()
							.then(e => {
								$location.path('member/'+$h.getUserType(childSnapshot.val().type));
							}, er => { });
			    		else {
				    		setError("There seems to be a problem with your Credentials. Please contact an Admin.");
				    		return;
				    	}
				    else
				    	setError("This username was not found...")
			    });
			  });
    	};

    	$location.path('member/1');

	}
]);