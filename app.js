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

		$scope.addPost = function() {
			$scope.posts.push({title: 'A new post', upvotes: 0})
		}
	}
]);