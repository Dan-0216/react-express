// start in dev environment: pm2 start pm2.config.js --env development, ignore --env in production.

module.exports = {
    apps: [{
        name: "react-express-scaffold",
        script: "./index.js",
        watch: true,
        env: {
            "NODE_ENV": "production",
        },
        env_development: {
            "NODE_ENV": "development"
        },
        env_qa: {
            "NODE_ENV": "qa"
        }
    }]
}