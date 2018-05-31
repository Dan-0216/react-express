var config = {
    env: "qa",
    port: 50001,
    redisHosts: [{ host: '10.214.168.116', port: 26378 }, { host: '10.214.168.116', port: 26379 }, { host: '10.214.168.116', port: 26380 }],
    masterName: "mymaster",
    mongoHost: "mongodb://10.214.169.71:27017/open",
    outhHost: "http://10.214.168.219:8182",
    gatewayUri: "http://10.214.168.109:21000/credit-gw/service",
    gatewayUriSendMsg:'http://credit.wanda.cn/credit-gw/service',
    gateWayOpenUrlProd:'https://credit.wanda.cn/api',
    gateWayOpenUrl:'http://10.214.168.220:8080/ords/datatech',
    gatewayAccount: "CREDIT_SDKTEST_USER",
    // gatewayAESKey: "e3543442a1b732b804ccdcefba9f992b",
    gatewayAESKey: "e3543442a1b732b804ccdcefba9f992b",
    gatewayAESKeySendMsg:"177cd7d9e9fc2ba8d01be94cb0b2c282",

};

export default config;