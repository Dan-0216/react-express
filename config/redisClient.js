import redis from 'ioredis';
import config from './config';

var options = {
    sentinels: config.redisHosts,
    name: config.masterName
};
if (config.env == "local") {
    options = config.redisHosts;
}

var client = new redis(options);

// console.log("client--->", client);
client.on('error', function (err) {    
    console.log('Redis error: ' + err);
});

export default client;