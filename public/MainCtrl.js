var liftRate = angular.module('liftRate', []);

function mainController($scope, $http) {
    $scope.formData = {};

    $http.get('/api/workouts')
        .success(function(data) {
            $scope.workouts = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.createWorkout = function() {
        $http.post('/api/workouts', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                $scope.workouts = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

    
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