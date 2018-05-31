class User {

    constructor(obj) {
        var schema = ["userId", "code"];
        if (obj) {
            for (var attr of schema) {
                if (obj[attr]) {
                    this[attr] = obj[attr];
                }
            }
        }
    }
}

export default User;