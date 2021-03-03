const { sendSuccessResponse, sendErrorResponse, sendNoStdResponse } = require('../helper/api-response');
const Studentpack = require("../models/studentpack");
const bcrypt = require("bcrypt");

exports.getTimetableByStdId = async (req, res, next) => {
    const studentId = req.params.stdid;
    const salt = "$2b$04$26R0HEEhYR06LLaHZnWx8.";
    const hashedStudentId = await bcrypt.hash(studentId, salt);

    try {
        const student = await Studentpack.findOne({std_id: hashedStudentId})
        .select("std_id reg_table sched_table")
        if (student){
            return sendSuccessResponse(res, student);
        }
        else{
            return sendNoStdResponse(res, {});
        }
        
      } catch (error) {
        next(error);
      }

};


exports.getTimetable = async (req, res, next) => {
    try {
      return sendSuccessResponse(res, {});
    } catch (error) {
      next(error);
    }
  };
  