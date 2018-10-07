/**
 * API for hello world
 */

 // DEPENDENCIES
 const http = require('http');
 const url = require('url');
 const StringDecoder = require('string_decoder').StringDecoder;
 const config = require('./config.js');

 // SERVER
 const server = http.createServer((req, res) => {

    // get url
    let parsedUrl = url.parse(req.url, true);

    // get path
    let path = parsedUrl.pathname;
    let trimmedPath = path.replace(/^\/+|\/+$/g,'');

    // get query string
    let queryStringObject = parsedUrl.query;

    // get method
    let method = req.method.toLocaleLowerCase();

    // get headers
    let headers = req.headers;

    // get payload
    let decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', (data) => {
        buffer += decoder.write(data);
    });

    req.on('end', () => {
        buffer += decoder.end();

        // data
        let data = {
            trimmedPath,
            queryStringObject,
            method,
            headers,
            payload: buffer
        };

        // route
        let chooseHandler = typeof(router[trimmedPath][method]) !== 'undefined' ? router[trimmedPath][method] : handlers.notFound;

        // request
        chooseHandler(data, (statusCode, payload) => {
            // handle status code
            statusCode = typeof(statusCode) === 'number' ? statusCode : 200;

            // convert payload
            let payloadString = JSON.stringify(payload);

            // send result
            res.setHeader('Content-Type', 'application/json');
            res.writeHead(statusCode);
            res.end(payloadString);
        })
    });
 });

 // SERVER LISTEN
 server.listen(config.port, () => {
     console.log(`The server is listening on port ${config.port} on ${config.envName}`);
 });

 // HANDLERS
 let handlers = {};

 // Route - ping
 handlers.ping = (data, callback) => {
     callback(200);
 };

 // Route - hello
 handlers.hello = (data, callback) => {
    callback(200, {
        message: "👋"
    });
 };

 // Route - not found
 handlers.notFound = (data, callback) => {
     callback(404)
 };

 // ROUTER
 let router = {
     ping: {
         get: handlers.ping
     },
     hello: {
         post: handlers.hello
     }
 };

 