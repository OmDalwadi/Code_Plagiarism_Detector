const express = require("express");;
const _ = require("lodash");
const http = require("http");
const cors = require("cors");
let logger = require("morgan");
let cookieParser = require("cookie-parser");
const { query } = require("express");

const app = express();
require("./dbConnect")

const server = http.createServer(app);
app.use(cors());
app.options({ "origin": "http://127.0.0.1:3307/" },  cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const { sendQueryToDatabase } = require("./api/code")
app.get("/upload", async(req, res) => {
    let { ans } = req.query
    var query = "SELECT C.* FROM course C WHERE C.CID = 1;"
    var bool = await sendQueryToDatabase(query);
    console.log("bool", bool)
    for (let i in bool) {
        console.log(bool[i].CID)
    }

    res.send()
})

app.use(logger("dev"));

server.listen(3000, () => {
    console.log(`
            your application is running on $ { 3000 }
            `);
});