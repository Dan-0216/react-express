var config = {
    env: "production",
    port: 50001,
    redisHosts: [{ host: '10.154.222.232', port: 26380 }, { host: '10.105.94.139', port: 26380 }],
    masterName: "mymaster",
    mongoHost: "mongodb://10.105.94.139:27017/open",
    mongoAuthHost: "mongodb://10.105.94.139:27017/authorization",
    outhHost: "https://oauth.wanxinyong.com",
    gatewayUri: "http://credit.wanda.cn/credit-gw/service",
    gatewayUriSendMsg:'http://credit.wanda.cn/credit-gw/service',
    gateWayOpenUrlProd:'https://credit.wanda.cn/api',
    gateWayOpenUrl:'https://credit.wanda.cn/api',
    gatewayAccount: "CREDIT_SDKTEST_USER",
    gatewayAESKey: "177cd7d9e9fc2ba8d01be94cb0b2c282",
    gatewayAESKeySendMsg:"177cd7d9e9fc2ba8d01be94cb0b2c282",

}

export default config;