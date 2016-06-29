(function(){
	

	var app = angular.module('bookStore', ['ngTable']); 

	
	app.controller('StoreController', StoreController);

	StoreController.$inject = ['$http', 'NgTableParams'];
	function StoreController($http, NgTableParams){
		var store = this;
        var books = [
		{
			"name": "Html from start to give up",
			"price": 2,
			"comment": "An awesome book to be a pillow",
			"available": true
		},
		{
			"name": "AngularJS from start to give up",
			"price": 2,
			"comment": "Too hard to be a pillow",
			"available": false
		}];

        
		// page setting
		var initpageSize = Number(localStorage.getItem('page_size') || 20);
		store.pageSize   = initpageSize;
		store.pageSizes  = [10, 20, 30, 50, 100];
        store.bookTable = createTable(books);

		function createTable(data){
			var initParams = {
        		sorting: {name: "asc"},
        		count: store.pageSize
      		};
      		var initSettings = {
        		counts: [],
        		paginationMaxBlocks: 13,
        		paginationMinBlocks: 2,
        		dataset: data
      		};
      		console.log(data);
      		return new NgTableParams(initParams, initSettings);
		}





	}


})();