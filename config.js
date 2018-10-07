/**
 * Export configuration for environment
 */

// ENVIRONMENTS
var environments = {};

environments.staging = {
    port: 3000,
    envName: 'staging'
};

environments.production =  {
    port: 5000,
    envName: 'production'
};

// CURRENT ENVIRONMENT
var currentEnvironment = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLocaleLowerCase() : '';

// ENVIRONMENT TO EXPORT
var environmentToExport = typeof(environments[currentEnvironment]) === 'object' ? environments[currentEnvironment] : environments.staging;

// EXPORT
module.exports = environmentToExport;