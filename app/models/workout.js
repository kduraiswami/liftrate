// require mongoose
var mongoose = require('mongoose');
var schema = mongoose.Schema;

// create workout schema
var workoutSchema = new Schema({
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