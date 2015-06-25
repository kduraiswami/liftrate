var Workout = require('./models/workout');

    module.exports = function(app) {
        app.get('/api/workouts', function(req, res) {
            Workout.find(function(err, workouts) {
                // need to add error handling
                res.json(workouts);
            });
        });

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // route to handle all angular requests
        app.get('*', function(req, res) {
            res.sendfile('./public/views/index.html');
        });

    };