import Joi from 'joi';

export default {
    // Query /api/users
    userInfo: {
        query: {
            userId: Joi.string().required(),
            code: Joi.string().required()
        }
    },
    // tokenUserInfo: {
    //     anchor: {
    //         access_token: Joi.string().required()
    //     }
    // },
    // postTokenUserInfo: {
    //     body: {
    //         token: Joi.string().required()
    //     }
    // },
    // postUserInfo: {
    //     body: {
    //         code: Joi.string().required()
    //     }
    // }
};
