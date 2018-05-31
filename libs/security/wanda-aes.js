var crypto = require('crypto');

module.exports = (function () {
    var DEFAULT_ROOT_IV = "0000000000000000";
    return {
        encrypt: function (key, txt, algorithm, encoding) {
            key = new Buffer(key, "hex");
            var cipher = crypto.createCipheriv(algorithm ? algorithm : 'aes-128-cbc', key, DEFAULT_ROOT_IV);
            // var crypted = cipher.update(txt, encoding ? encoding : 'utf8', 'base64');
            // crypted += cipher.final('base64');

            var crypted = cipher.update(txt, encoding ? encoding : 'utf8', 'binary');
            crypted += cipher.final('binary');
            crypted = new Buffer(crypted, 'binary').toString('base64');

            return crypted;
        },
        decrypt: function (key, txt, algorithm, encoding) {
            key = new Buffer(key, "hex");
            var decipher = crypto.createDecipheriv(algorithm ? algorithm : 'aes-128-cbc', key, DEFAULT_ROOT_IV);
            // var decoded = decipher.update(txt, 'base64', encoding ? encoding : 'utf8');
            txt = new Buffer(txt, 'base64').toString('binary');
            var decoded = decipher.update(txt, 'binary', encoding ? encoding : 'utf8');
            decoded += decipher.final(encoding ? encoding : 'utf8');
            return decoded;
        }
    }
})();
