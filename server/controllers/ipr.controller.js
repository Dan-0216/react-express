import gatewayApi from "./gateway.controller";

function ipr(req, res, next) {
    var _corpName = req.body.corpName;
    return gatewayApi({ req_data: { corpName: _corpName }, prod_id: "P_B_B080" })
        .then((result) => {
            console.log('----> result', result)
            return res.json(result);
        })
        .catch(err => {
            console.error("binderror--->", err);
            return res.status(500).json(err);
        })
}

export default { ipr };