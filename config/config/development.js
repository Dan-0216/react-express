var config = {
    env: "development",
    port: 50001,
    redisHosts: { host: '127.0.0.1', port: 6379 },
    masterName: "mymaster",
    mongoHost: "mongodb://localhost:27017/open",
    mongoAuthHost: "mongodb://localhost:27017/authorization",
    outhHost: "http://localhost:40003/opneRegister"
}

export default config;