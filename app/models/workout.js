var mongoose = require('mongoose')

module.exports = mongoose.model('Workout', {
	exercises: String,
	goals: String,  
	comments: [{ body: String, date: Date }], 
	date: { type: Date, default: Date.now }
	hidden: Boolean, 
	metadata: {
		votes: Number, 
		stars: Number
	}
});