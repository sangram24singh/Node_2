const express = require('express')
const app = express()
const router = express.Router()
app.use(express.json)
router.get('/Api/main',(req, res)=>{
    res.send('Express.js, or simply Express, is a back end web application framework for building RESTful APIs with Node.js, released as free and open-so')
})

module.exports = {router}