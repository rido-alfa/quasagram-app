// dependencies
const express = require('express')

// config-express
const app = express()

// endpoint
app.get('/', (request, response) => {
  response.send('Hello Express.js')
})

// listen
app.listen(3000)