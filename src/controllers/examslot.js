const { sendSuccessResponse } = require('../helper/api-response');
const Examslot = require('../models/examslot');

exports.getExamslotByCourseId = async (req, res, next) => {
    const cid = req.params.cid;
    try {
        const examslot = await Examslot.find({course_id:cid})

        return sendSuccessResponse(res, examslot);
      } catch (error) {
        next(error);
      }
};

exports.getExamslots = async (req, res, next) => {
  try {
      const examslot = await Examslot.find()

      return sendSuccessResponse(res, examslot);
    } catch (error) {
      next(error);
    }
};