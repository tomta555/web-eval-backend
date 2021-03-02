const { sendSuccessResponse } = require('../helper/api-response');
const Student = require('../models/student');
const Examslot = require('../models/examslot');
const Regexamslot = require('../models/regexamslot');
const Studentpack = require("../models/studentpack");

exports.addStudentpack = async (req, res, next) => {
  const {
    std_id,
    reg_table,
    sched_table,
  } = req.body;
  try {


      const student = await Studentpack.create({
        std_id,
        reg_table,
        sched_table
      });
  
      return sendSuccessResponse(res, student);
    } catch (error) {
      next(error);
    }
};


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