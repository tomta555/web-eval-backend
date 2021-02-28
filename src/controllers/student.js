const { sendSuccessResponse } = require('../helper/api-response');
const Student = require('../models/student');

exports.getStudentByStdId = async (req, res, next) => {
    const student_id = req.params.stdid;
    //hash
    try {
        const student = await Student.find({std_id:student_id})

        return sendSuccessResponse(res, student);
      } catch (error) {
        next(error);
      }
};

exports.getStudents = async (req, res, next) => {
  //hash
  try {
      const student = await Student.find()

      return sendSuccessResponse(res, student);
    } catch (error) {
      next(error);
    }
};