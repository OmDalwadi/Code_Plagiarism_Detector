const express = require("express");;
const _ = require("lodash");
const http = require("http");
const cors = require("cors");
let logger = require("morgan");
let cookieParser = require("cookie-parser");

const app = express();
const server = http.createServer(app);
app.use(cors());
app.options({ "origin": "http://127.0.0.1:3307/" },  cors())
require("./dbConnect");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get("/upload", (req, res) => {
    const { ans } = req.query

    console.log("Answer", ans)
})

app.use(logger("dev"));

server.listen(3000, () => {
    console.log(`your application is running on ${3000}`);
});