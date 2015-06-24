var app = angular.module('liftRate', []);

app.controller('MainCtrl', [
	'$scope',
	function($scope){
		$scope.test = 'Hello world!';
		$scope.workouts = [
		{title: 'Lower Workout', upvotes: 5},
		{title: 'Pec Blast', upvotes: 2},
		{title: 'Full Superset', upvotes: 15},
		];

		$scope.incrementUpvotes = function(workout) {
			workout.upvotes += 1;
		}

		$scope.addWorkout = function() {
			if(!$scope.title || $scope.title === '') { return; }
			$scope.workouts.push({title: $scope.title, upvotes: 0})
			$scope.title = '';
		}

	}
]);