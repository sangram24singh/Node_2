const express = require('express')
const app = express()
app.use(express.json)
const {router} = require('./Router/route')
app.use(router)
app.listen(4000,()=>{
    console.log('you are running on 4000')
})
