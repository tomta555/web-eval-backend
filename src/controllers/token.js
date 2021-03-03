const { sendSuccessResponse } = require('../helper/api-response');
const qs = require('qs')
const axios = require('axios')

exports.getOauthToken = async (req, res, next) => {
  const code_auth = req.params.code

  const data = qs.stringify({
    code: code_auth,
    redirect_uri: "https://affectionate-roentgen-01a06a.netlify.app",
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

    axios(config).then((response) =>{
      const token = response.data.access_token
      console.log(token)
      return sendSuccessResponse(res, {token: token});
    
    })
    
    
  } catch (error) {
    next(error);
  }
}

exports.getOauthTokens = async (req, res, next) => {

  try {
    return sendSuccessResponse(res, {});
  } catch (error) {
    next(error);
  }
}