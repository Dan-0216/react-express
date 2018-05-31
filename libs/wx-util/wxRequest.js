class WandaRequest {
    constructor(req) {
        this.req = req;
    }

    getClientIP() {
        var ipAddress;
        var headers = this.req.headers;
        var forwardedIpsStr = headers['x-real-ip'] || headers['x-forwarded-for'];
        forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
        if (!ipAddress) {
            ipAddress = this.req.connection.remoteAddress;
        }
        return ipAddress;
    }

    parseToModel(schema) {
        function setterBy(obj) {
            if (obj) {
                for (var attr in schema) {
                    if (obj[attr]) {
                        schema[attr] = obj[attr];
                    }
                }
            }
        }
        if (!schema) return {};
        setterBy(this.req.params);
        setterBy(this.req.query);
        setterBy(this.req.body);        
        return schema;
    }
}

export default WandaRequest;