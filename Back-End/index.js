const express = require('express')
const cors = require('cors')
const MoviesR = require('./Movies')
const { Router } = require('express')
const app = express()
const port = 3000
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors())

app.get('/api', (request, response) =>{
    response.send(204)
})

app.use('/api', MoviesR)


app.listen(port, ()=>{
    console.log(`Server Running on http://localhost:${3000}/api`);    
})

console.log(Router)
