const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    std_id: String,
    "enrolled_courses2/2562": [String],
    "enrolled_courses2/2563": [String],
});

module.exports = mongoose.model('Student', studentSchema);