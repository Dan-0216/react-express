import config from '../../config/config';

var connections = {};
var getConnection = function (dbName) {
    if (connections[dbName]) {
        //database connection already exist. Return connection object
        return connections[dbName];
    } else {
        var host = config.mongoHost;
        if (!host.endsWith("/")) {
            host += host + "/";
        }
        var mongoUri = host + dbName;
        connections[dbName] = mongoose.createConnection(mongoUri, { server: { socketOptions: { keepAlive: 1 } } });
        connections[dbName].on('error', () => {
            throw new Error(`unable to connect to database: ${mongoUri}`);
        });
        return connections[dbName];
    }
}

export { getConnection };
