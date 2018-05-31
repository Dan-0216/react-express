import rp from "request-promise";
import _ from 'lodash';

import gatewayModel from "../models/gateway.model";
import config from "../../config/config";
import wdAES from "../../libs/security/wanda-aes";
import wxUtil from "../../libs/wx-util";

var invoke = function (obj) {
    gatewayModel.acct_id = config.gatewayAccount;
    gatewayModel.req_data = obj.req_data;
    gatewayModel.inf_id = obj.prod_id;
    gatewayModel.prod_id = obj.prod_id;
    gatewayModel.req_time = new Date().getTime();
    gatewayModel.request_sn = wxUtil.String.randomString(16);
    var obj_str = JSON.stringify(gatewayModel);

    var _body = wdAES.encrypt(config.gatewayAESKeySendMsg, obj_str);
    var encodeBody = encodeURI(_body);
    // console.log("parameters--->", obj_str, _body);
    // console.log("encodeBody-->", encodeBody);

    var options = {
        method: 'POST',
        uri: config.gatewayUriSendMsg,
        body: encodeBody,
        headers: {
            "X_WANDA_ACCT_ID": config.gatewayAccount,
            "Content-Type": "application/json;charset=UTF-8"
        }
    };
    // console.log("options-->", options);
    return rp(options)
        .then(parsedBody => {
            // console.log("parsedBody--->", parsedBody);
            var result = wdAES.decrypt(config.gatewayAESKeySendMsg, parsedBody);
            // console.log("result--->", result);
            return JSON.parse(result);
        });
}

export default invoke;