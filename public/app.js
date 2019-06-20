'use-strict'

var spa = angular
	
	.module('parliament', [			// add name for your app (this should be same as in package.json && ng-app in index.html)
		'ngRoute',			    	// add modules here and their js files in index.html to use them
		'ngMaterial',
		'firebase'
	])
	.config([					    // creating a model to define screens for your app
		'$routeProvider',		// add Provider libraries to define state/url/theme of your screens
		'$mdThemingProvider',
		'$qProvider',
		function (
			$rp,
			$mdt,
			$qp) {

				// defining screens here
				$rp.otherwise('login');
				$rp.when('/login', {
					templateUrl: 'views/login.html',
					controller: 'loginCTRL'
				});

				// $rp.when('member','member/0');
				$rp.when('/member/:type', {
					templateUrl: 'views/member.html',
					controller: 'memberCTRL'
				});
/*				

				$rp.when('/about', {
					templateUrl: 'views/about.html',
					controller: 'aboutCTRL'
				});

				$rp.when('/faq', {
					templateUrl: 'views/faq.html',
					controller: 'faqCTRL'
				});
*/
				// Extend the BLUE theme with a different color and make the contrast color black instead of white.
				// For example: raised button text will be black instead of white.
				var myPrimaryMap = $mdt.extendPalette('blue', {
				'500': '#82B1FF',
				'contrastDefaultColor': 'dark'
				});
				var myAccentMap = $mdt.extendPalette('blue', {
				'500': '#4D82CB',
				'contrastDefaultColor': 'light'
				});

				// Register the new color palette map with the name <code>blue</code>
				$mdt.definePalette('customPrimary', myPrimaryMap);
				$mdt.definePalette('customAccent', myAccentMap);

				$mdt.theme('default')
					.primaryPalette('customPrimary')
					.accentPalette('customAccent')
					.dark();
    			$mdt.enableBrowserColor({
				      theme: 'default', // Default is 'default'
				      palette: 'accent', // Default is 'primary', any basic material palette and extended palettes are available
				      hue: '200' // Default is '800'
				    });

    			// $qp.errorOnUnhandledRejections(false);
		}
	]);