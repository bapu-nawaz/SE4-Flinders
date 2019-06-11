spa.factory("newsData",[
	"$http", "$q", "API", "H",
	function ($http, $q, $api, $h) {

		function newsData() { 
			this.arr = "";
			this.TAG = "Data Model::";
		};

		newsData.prototype.add = (data) => {
			$h.printInfo(this.TAG, "Add Data Called");
			$h.printInfo(this.TAG, data);
			$api.postNews(data);
			this.arr.push(data);
			$h.showSimpleToast('News Created !!');
		};

		newsData.prototype.setData = (data) => {
			if(this.arr==undefined)
				this.arr = data;
			$h.printInfo(this.TAG, "Set Data Called", this.arr);
		}

		newsData.prototype.get = () => {
			$h.printInfo(this.TAG, "Get Data Called", this.arr);
			return this.arr;
		};

		return new newsData();

	}
]);