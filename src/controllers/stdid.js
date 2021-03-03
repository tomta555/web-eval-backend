const { sendSuccessResponse } = require("../helper/api-response");

const axios = require("axios");

exports.getStudentId = async (req, res, next) => {
  const token = req.params.token;
  const config = {
    method: "get",
    url: "https://misapi.cmu.ac.th/cmuitaccount/v1/api/cmuitaccount/basicinfo",
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  try {
    axios(config).then((student) => {
     const std_id = student.data.student_id
      return sendSuccessResponse(res, {std_id:std_id});
    })

    
  } catch (error) {
    next(error);
  }
};

exports.getStudentIds = async (req, res, next) => {
  try {
    return sendSuccessResponse(res, {});
  } catch (error) {
    next(error);
  }
};
