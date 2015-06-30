var Workout = require('./models/workout');

module.exports = function(app){
	//Read
	app.get('/api/workouts', function(req, res) {
		Workout.find(function(err, workouts) {
			if (err)
				res.send(err)
			res.json(workouts)
		});
	});

	//Destroy
	app.delete('/api/workouts/:workout_id', function(req, res) {
		Workout.remove({
			_id : req.params.workout_id
		}, function(err, workout) {
			if (err)
				res.send(err);


			Workout.find(function(err, workouts) {
				if (err)
					res.send(err)
				res.json(workouts);
			});
		});
	});

}