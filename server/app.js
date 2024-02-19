const express = require("express")
const app = express();
const cors = require("cors");

app.use(cors());


app.use(express.json());
app.get('/', (req, res) => {
    res.send(`Hello from Server`);
})


app.post('/DSA/array', (req, res) => {
    const number = req.body.number
    const arr = req.body.arr;
    console.log("AA", number)
    console.log("arr", arr)
    res.json({
        status: 200,
        message: "Success",
        data: number,arr
    });
})

app.listen(5000, () => {
    console.log("server running in port 5000")
})
