# Pirple - Homework Assignment #1

## Requirements

- NodeJS (v10.9.0)

## Start Server

To start the server simply run:
```
node index.js
```

## Tests

### Postman

Instructions on how to run **PostMan** tests.

Steps:
1. Make sure the server is running.
2. In **Postman** File > Import
3. Select `tests/Pirple_-_Assignment_1.postman_collection.json`
4. File > New Runner Window
5. In *All Collections* choose **Pirple - Assignment 1**
6. Click blue button labeled `Run Pirple - Assignment 1`

### Newman

These are to run the automated tests with **newman**.

**Requirements:**
- NodeJS (v10.9.0)

Steps:
1. cd `tests`
2. run `npm install`
3. run `./node_modules/newman/bin/newman.js run Pirple_-_Assignment_1.postman_collection.json`



