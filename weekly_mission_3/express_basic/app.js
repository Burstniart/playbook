// Using express object
const express = require('express')
// express app
const app = express()
// port to host our app
const port = 3000

// initial path in resposne to url at localhost:3000
app.get('/', (req, res) => {
    res.send('Hello Monika')
})
// localhost:3000/launchx
app.get('/launchx', (req, res) => {
    res.send('Welcome to LaunchX')
})
// return object in explorersInNode
app.get('/explorersInNode', (req, res) => {
    const explorer = {name: 'Explorer', msg: 'Hi'}
    res.send(explorer)
})
// Query Params: REceive parameters via url
// http://localhost:3000/explorers/monika
// req.params = {"explorerName: 'monika'"}
app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})

// initialize app
app.listen(port, () =>  {
    console.log(`Example app listening on ${port}`);
})