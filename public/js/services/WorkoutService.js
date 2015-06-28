angular.module('WorkoutService', []).factory('Workout', ['$http', function($http){
	return {

		get : function() {
			return $http.get('/api/workouts');
		},

		create : function(workoutData) {
			return $http.post('api/nerds', nerdData);
		},

		delete : function(id) {
			return $http.delete('/api/nerds/' + id);
		}
	}
}]);