const { sendSuccessResponse } = require('../helper/api-response');
const Student = require('../models/student');
const Examslot = require('../models/examslot');
const Regexamslot = require('../models/regexamslot');

exports.addStudent = async (req, res, next) => {
    const {
      std_id,
      enrolled_courses,
    } = req.body;
    try {


        const student = await Student.create({
          std_id,
          enrolled_courses,
        });
    
        return sendSuccessResponse(res, student);
      } catch (error) {
        next(error);
      }
};

exports.addExamslot = async (req, res, next) => {
  const {
    course_id,
    exam_slot
  } = req.body;

  try {
      const examslot = await Examslot.create({
        course_id,
        exam_slot
      });
  
      return sendSuccessResponse(res, examslot);
    } catch (error) {
      next(error);
    }
};

exports.addRegExamslot = async (req, res, next) => {
  const {
    course_id,
    exam_slot
  } = req.body;

  try {
      const regexamslot = await Regexamslot.create({
        course_id,
        exam_slot
      });
  
      return sendSuccessResponse(res, regexamslot);
    } catch (error) {
      next(error);
    }
};