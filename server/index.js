const express = require('express')
const cors = require('cors') 
// const houses = require('./db.json')
const ctrl = require('./controller')

const app = express()

const port = 4004

app.use(express.json())
app.use(cors())

// ENDPOINTS



app.get('/api/houses', ctrl.getHouse)
app.delete('/api/houses/:id', ctrl.deleteHouse)
app.post('/api/houses', ctrl.createHouse)
app.put('/api/houses/:id', ctrl.updateHouse)

app.listen(port, () => console.log(`Server is running ${port}`))