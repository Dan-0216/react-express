import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';
import APIError from '../helpers/APIError';
import security from "../../libs/security";
import wxUtil from "../../libs/wx-util";

/**
 * The registed user Schema
 */
const User = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

/**
 * Add your
 * - pre-save hooks
 * - validations
 * - virtuals
 */

/**
 * Methods
 */
User.method({
});

/**
 * Statics
 */
User.statics = {
};

/**
 * @typedef User
 */
export default mongoose.model('User', User);
