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


}