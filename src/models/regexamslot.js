const mongoose = require('mongoose');

const regexamslotSchema = new mongoose.Schema({
    course_id: String,//"259111-001"
    exam_slot: Number,
    term:String
});

module.exports = mongoose.model('Regexamslot', regexamslotSchema);