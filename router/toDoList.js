const express = require("express")

const routes = express.Router();

routes.get('/list', async (req, res) => {
    res.send("Hello")
})

module.exports = routes