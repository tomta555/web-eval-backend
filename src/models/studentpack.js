const mongoose = require('mongoose');

const studentpackSchema = new mongoose.Schema({
    std_id: String,
    reg_table:[Object],
    sched_table:[Object],
});

module.exports = mongoose.model('Studentpack', studentpackSchema);