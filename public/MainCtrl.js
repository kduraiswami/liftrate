var liftRate = angular.module('liftRate', []);

function mainController($scope, $http) {
    $scope.formData = {};

    // when landing on the page, get all workouts and show them
    $http.get('/api/workouts')
        .success(function(data) {
            $scope.workouts = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    // when submitting the add form, send the text to the node API
    $scope.createWorkout = function() {
        $http.post('/api/workouts', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.workouts = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    // delete a Workout after checking it
    $scope.deleteWorkout = function(id) {
        $http.delete('/api/workouts/' + id)
            .success(function(data) {
                $scope.workouts = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}