// require mongoose
var mongoose = require('mongoose');
var schema = mongoose.Schema;

// create workout schema
var workoutSchema = new schema({
	title:  String,
	time: String, 
	exercises:   String,
	comments: [{ body: String, date: Date }],
	date: { type: Date, default: Date.now },
	hidden: Boolean,
	meta: {
		votes: Number,
		stars:  Number
	}
});

// create individual workout
var Workout = mongoose.model('Workout', workoutSchema);
var bigOne = new Workout({
	title: "Hard Workout",
	time: "45 min",
	exercises: "squats, jumps, pushups, burpies",
}) 



console.log(bigOne)