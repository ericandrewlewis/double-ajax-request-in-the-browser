'use strict'

let express = require('express')
let fs = require('fs')
let PORT = 3000

let app = express()

app.get('/', function (request, response) {
  response.sendFile(__dirname + '/index.html')
})

app.get('/some-route', function (request, response) {
  process.stdout.write('Handling incoming request.\n')
  let wait = (121 * 1000)
  setTimeout(() => {
    process.stdout.write(`Sending 200 HTTP response\n`)
    response.sendStatus(200)
   }, wait )
})

app.listen(PORT)
process.stdout.write(`Express running on http://localhost:${PORT}\n`)
