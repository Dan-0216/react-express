import config from "../../config/config";
import wxUtil from "../../libs/wx-util";

const gatewayModel = {
    request_sn: wxUtil.String.randomString(32),
    inf_id: "",
    acct_id: config.gatewayAccount,
    prod_id: "",
    req_time: new Date().getTime(),
    req_data: {},
    ext_data: null
};

export default gatewayModel;