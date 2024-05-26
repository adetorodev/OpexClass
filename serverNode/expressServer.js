const express = require('express')

const app = express()

app.get('/', (req, res) => {
    console.log("We are on the home page")
    res.status(200).send("Home Page")
})

app.get('/about', (req, res) => {
    res.status(200).send("About Page")
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>Resouces is not found</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on porrt 5000')
})