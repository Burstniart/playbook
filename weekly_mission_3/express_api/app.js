// use express object
const express = require('express')
// Express app
const app = express()
app.use(express.json())
const port = 3000

// Use express's GET method for this endpoint
// HTTP methods
app.get('/v1/explorers', (req, res) => {
    console.log(`Explorers API GET ALL requests ${new Date()}`)
    // Create some objects and return the array
    const explorer1 = {id: 1, name:'Monika1'}
    const explorer2 = {id: 2, name:'Monika2'}
    const explorer3 = {id: 3, name:'Monika3'}
    const explorer4 = {id: 4, name:'Monika4'}
    const explorers = [explorer1, explorer2, explorer3, explorer4]
    // Add HTTP CODE 200 in the request
    res.status(200).json(explorers)
})

// GET Create endpoint to return a "explorer" requesting id
app.get('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers GET request ${new Date()}`);
    console.log(`Getting explorer with id ${req.params.id}`);
    const explorer = {id: 1, name: "Monika"}
    res.status(200).json(explorer)
})
// POST Create endpoint to create "explorer"
app.post('/v1/explorers', (req, res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    // Client parameter
    const requestBody = req.body
    res.status(201).json({message: 'Created'})
})
// PUT Create endpoint to update a explorer
app.put('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers PUT request ${new Date()}`);
    console.log(`Update explorer qth id ${req.params.id}`);
    // Client parametes
    const requestBody = req.body
    res.status(200).json({message: 'Updated!'})
})
// DELETE Create endpoint to delete a explorer
app.delete('/v1/explorers/:id', (req, res) => {
    console.log(`Api Explorers DELETE request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params.id}`);
    // Client parametes
    const requestBody = req.body 
    res.status(200).json({message: "Deleted"})
})

// Initialize app
app.listen(port, () => {
    console.log(`Example app, Monika, listening on port ${port}`)
})