const express = require("express")
const app = express();

app.get('/', (req, res) => {
    res.send(`Hello from Server`)
})


app.listen(5000, () => {
    console.log("server ")
})
console.log("aa")