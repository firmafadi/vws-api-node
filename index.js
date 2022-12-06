const express = require('express')
const app = express()

require('dotenv').config()

const APP_NAME = process.env.APP_NAME || "VWS-API";
const APP_PORT = process.env.APP_PORT || 3000;

app.get('/', function (req, res) {
  res.send(`<h2>${APP_NAME} is running</h2>`)
})

app.listen(APP_PORT, '0.0.0.0', () => {
  console.log(`${APP_NAME} app listening at http://localhost:${APP_PORT}`)
});