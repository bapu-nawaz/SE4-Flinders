spa.factory("API",[
	"$http", "$q",
	function ($http, $q) {

		function API() { };


		var printInfo = (text) => {
			printInfo("API: ", text);
		}
		var printInfo = (TAG, text) => {
			printInfo(TAG,text,null);
		}
		var printInfo = (TAG, text, more) => {
			// This will print all logs, uncomment for debugging only.
			console.log(
				TAG,
				text,
				more);
		}

		API.prototype.postNews = (data) => {		        
		    var deferred = $q.defer();
		    printInfo(data);
		    $http({
                method: 'POST',
                headers: {
                    'contentType': 'application/json'
                },
                url: 'http://localhost:5000/writenews',
                // url: 'http://port-3001.web-dev-nawazretailogics458684.codeanyapp.com/writenews',
                data: data
            }).then(function(data, status, headers, config) {
            	printInfo("API-Response:", "Your data has been posted Successfully !!", data);
	            deferred.resolve(data);  
	        },function(data, status, headers, config) {
	            printInfo('an error has occured', data, status);
	            // execute callback function
	            deferred.reject(data);
	        });
		    return deferred.promise;
		};
	
	    API.prototype.getNews = () => {
	        
	        var deferred = $q.defer();
	        $http.get('http://localhost:5000/getnews')
	        // $http.get('http://port-3001.web-dev-nawazretailogics458684.codeanyapp.com/getnews')
	            .then(function(data, status, headers, config) {
		            printInfo('API-Response:', "Getting data was a success !!", data);
	                deferred.resolve(data);
	            }
	            , function(data, status, headers, config) {
		            printInfo('an error has occured: '+ data, status);
	                // execute callback function
	                deferred.reject(data);
	            });
	        return deferred.promise;
	    };

		return new API();

	}
]);