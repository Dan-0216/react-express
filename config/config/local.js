var config = {
    env: "local",
    port: 50001,
    redisHosts: { host: '127.0.0.1', port: 6379 },
    mongoHost: "mongodb://localhost:27017/open",
    outhHost: "http://localhost:40003",
    //http://10.214.168.109:11000/credit-gw/service
    gatewayUri: "http://10.214.168.109:21000/credit-gw/service",
    gatewayUriSendMsg:'http://credit.wanda.cn/credit-gw/service',
    gateWayOpenUrlProd:'https://credit.wanda.cn/api',
    gateWayOpenUrl:'http://10.214.168.220:8080/ords/datatech',
    gatewayAccount: "CREDIT_SDKTEST_USER",
    // gatewayAESKey: "e3543442a1b732b804ccdcefba9f992b",
    gatewayAESKey: "e3543442a1b732b804ccdcefba9f992b",
    gatewayAESKeySendMsg:"177cd7d9e9fc2ba8d01be94cb0b2c282",

}

export default config;