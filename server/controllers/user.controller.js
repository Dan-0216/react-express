import axios from "axios";

import User from '../models/user';
import wxReq from "../../libs/wx-util/wxRequest";

function userInfo(req, res) {
    res.render("userinfo", { code: req.query.code, userId: req.query.userId });
}

export default { userInfo };