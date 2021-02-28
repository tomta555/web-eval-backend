const mongoose = require('mongoose');

const examslotSchema = new mongoose.Schema({
    course_id: String,//"259111"
    exam_slot: Number,
    term:String
});

module.exports = mongoose.model('Examslot', examslotSchema);