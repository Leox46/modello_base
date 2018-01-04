var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// ci sono solo 3 data type: Object, String e Number.
var AssignmentSchema = new Schema({
	assignmentId: String,
	studentId: String,
	assignment: Object,
	assignmentType: String,
	assignmentValuation: Number
});

module.exports = mongoose.model('Assignment', AssignmentSchema);
