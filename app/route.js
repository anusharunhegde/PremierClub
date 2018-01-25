
pclub.config(['$routeProvider',function($routeProvider){

	$routeProvider

	.when('/home',{

		templateUrl : 'views/home.html',

		
		
	})
	.when('/premier',{

		templateUrl : 'views/allMatch.html',

		controller : 'allMatchController',

		controllerAs : 'allCntrl'
	})
	.when('/:code1/:code2/:date',{

		templateUrl : 'views/singleMatch.html',

		controller : 'singleMatchController',

		controllerAs : 'singleCntrl'


	})
	.when('/:code',{

		templateUrl : 'views/stats.html',

		controller : 'statsController',

		controllerAs : 'statsCntrl'
	})
	.otherwise({
		templateUrl : 'views/home.html',


		
	});
	
}]);