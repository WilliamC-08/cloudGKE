'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hello!\n\nNama Saya: William Chandra\nNIM: 51018021\n, dari jurusan Sistem Informasi :)\n\nTerimakasih!!!')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
