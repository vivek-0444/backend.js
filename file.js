require('dotenv').config()
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/twitter',  (req,res) => {
    res.send('bankaaaaaaaai')

})

app.get('/twi',  (req,res) => {
    res.send('baaaai')

})
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})