

const express = require("express");
const app = express();

require('dotenv').config()



app.get('/', (req, res) => {
    res.send("<h1>Hii my name is Raushan </h1>");
})

app.listen(process.env.PORT, () => {
    console.log("app is listeing"+process.env.PORT)
})