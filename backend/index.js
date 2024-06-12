const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')

const rootRouter = require('./routes/index.js');

const app = express()
const PORT = 3000

app.use(cors())
app.use(bodyParser.json())

app.use('/api/v1', rootRouter)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
