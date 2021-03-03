const { sendSuccessResponse } = require("../helper/api-response");
const Student = require("../models/student");
const Examslot = require("../models/examslot");
const Regexamslot = require("../models/regexamslot");
const bcrypt = require("bcrypt");
const axios = require('axios')

exports.getStudentTimetableByStdId = async (req, res, next) => {
  const studentId = req.params.stdid;
  const salt = "$2b$04$26R0HEEhYR06LLaHZnWx8.";
  const hashedStudentId = await bcrypt.hash(studentId, salt);
  // var x = 0
  // for (i = 622100000; i < 622199999; i++) {
  //   const t = await bcrypt.compare(
  //     i.toString(),
  //     "$2b$04$26R0HEEhYR06LLaHZnWx8.PCffzTyYmZCUIZeohSlEbqcnurC8HgW"
  //   );

  //   if (t) {
  //     x = i
  //     break
  //   }else{
  //     console.log(i);
  //   }
  // }
  // console.log(x)
  try {
    const std_timetable = { sched_table: [], reg_table: [] };
    const student = await Student.findOne({ std_id: hashedStudentId });
    if(student){
      const term = ["2/2562", "2/2563"];
      for (i = 0; i < term.length; i++) {
        const term_key = "enrolled_courses" + term[i];
        // console.log(term_key);
        // console.log(student);
        // console.log(student[term_key]);
        if (student[term_key]) {
          var examslot;
          var regexamslot;
          var sched_table = {};
          var reg_table = {};
          for (j = 0; j < student[term_key].length; j++) {
            // console.log(term[i])
            cid = student[term_key][j];
            examslot = await Examslot.findOne({
              $or: [
                { course_id: cid, term: term[i] },
                { course_id: cid.substring(0, 6), term: term[i] },
              ],
            }).select("course_id exam_slot");
            // console.log(examslot);
            if (examslot) {
              if (!sched_table[examslot["exam_slot"]]) {
                sched_table[examslot["exam_slot"]] = [examslot.course_id];
              } else {
                sched_table[examslot["exam_slot"]].push(examslot.course_id);
              }
            }
            regexamslot = await Regexamslot.findOne({
              $or: [
                { course_id: cid, term: term[i] },
                { course_id: cid.substring(0, 6), term: term[i] },
              ],
            }).select("course_id exam_slot");
            // console.log(regexamslot);
            if (regexamslot) {
              if (!reg_table[regexamslot["exam_slot"]]) {
                reg_table[regexamslot["exam_slot"]] = [regexamslot.course_id];
              } else {
                reg_table[regexamslot["exam_slot"]].push(regexamslot.course_id);
              }
            }
          }
          sched_table["term"] = term[i];
          reg_table["term"] = term[i];
          std_timetable.sched_table.push(sched_table);
          std_timetable.reg_table.push(reg_table);
        }
      }

      std_timetable.std_id = student.std_id;
    }
    return sendSuccessResponse(res, std_timetable);
  } catch (error) {
    next(error);
  }
};

exports.getStudentTimetable = async (req, res, next) => {
  try {
    return sendSuccessResponse(res, {});
  } catch (error) {
    next(error);
  }
};

exports.getOauthToken = async (req, res, next) => {
  const code_auth = req.params.code

  const data = qs.stringify({
    code: code_auth,
    redirect_uri: "http://localhost:8000/timetable",
    client_id: "TG48TWd9TqUgcSMSh5kKva4hepaSnEH45fQHueRu",
    client_secret: "ua4sgC2d7h9BudXTNX3DWyXnTZm6ccycq1sufPaP",
    grant_type: "authorization_code",
  });

  const config = {
    method: "post",
    url: "https://oauth.cmu.ac.th/v1/GetToken.aspx/",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    data: data,
  };
  try {

    const token = await axios(config);

    return sendSuccessResponse(res, token);
  } catch (error) {
    next(error);
  }
}

exports.getStudentId = async (req, res, next) => {
  const token = req.params.token
  const config = {
    method: "get",
    url: "https://misapi.cmu.ac.th/cmuitaccount/v1/api/cmuitaccount/basicinfo",
    headers: {
      Authorization: "Bearer " + token,
    },
  }
  try {

  const student_id = await axios(config);

  return sendSuccessResponse(res, student_id);
} catch (error) {
  next(error);
}

}