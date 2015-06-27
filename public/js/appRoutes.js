angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider

		.when('/', {
			templateURL: 'views/home.html',
			controller: 'MainController'
		})

		.when('/workouts',{
			templateURL: 'views/workout.html',
			controller: 'WorkoutController'
		});

		$locationProvider.html5Mode(true);
}]);