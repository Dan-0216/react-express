import Joi from 'joi';
import wxUtil from "../../libs/wx-util";

// define validation for all the env vars
const envVarsSchema = Joi.object({
  NODE_ENV: Joi.string()
    .allow(['development', 'production', 'qa', 'uat', "local"])
    .default('local'),
  PORT: Joi.number()
    .default(50001),
  MONGOOSE_DEBUG: Joi.boolean()
    .when('NODE_ENV', {
      is: Joi.string().equal('local'),
      then: Joi.boolean().default(true),
      otherwise: Joi.boolean().default(false)
    })
}).unknown()
  .required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);
if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

var config = require(`./${envVars.NODE_ENV}.js`);

for (var attr in envVars) {
  // console.log("attribute--->", attr, envVars[attr]);

  var attrs = attr.toLocaleLowerCase().split("_");
  var keys = [];
  keys.push(attrs[0]);
  for (var idx = 1; idx < attrs.length; idx++) {
    var changed = wxUtil.String.first(attrs[idx], 1).toUpperCase() + wxUtil.String.last(attrs[idx], attrs[idx].length - 1);
    keys.push(changed);
  }
  var key = keys.join("");
  // console.log("key--->", key);
  if (!config[key]) {
    config[key] = envVars[attr];
  }
}

export default config;
