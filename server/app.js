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


const { sendQueryToDatabase, insertData, levenshteinDistance } = require("./api/code")
app.get("/compare", async(req, res) => {
    let { ans } = req.query
    let currentPID = '1';
    let questionNum = '1';
    let assignmentNum = '1';
    var query = "SELECT sub.ANS FROM Course c INNER JOIN Professor p ON c.CID = p.CID INNER JOIN Assignment a ON p.PID = a.PID INNER JOIN Question q ON a.AID = q.AID INNER JOIN StuCoInfo sci ON p.PID = sci.PID INNER JOIN Submission sub ON q.QID = sub.QID AND sci.STUCO_ID = sub.STUCO_ID WHERE p.PID = '" + currentPID + "' AND q.Question_num = '" + questionNum + "' AND a.Assignment_num = '" + assignmentNum + "';"
    console.log(query);
    var bool = await sendQueryToDatabase(query);
    console.log("bool", bool)

    var maxScore = 0;
    var similarAnswer = "";
    for (let i in bool) {
        const editDistance = levenshteinDistance(ans, bool[i].ANS);
        similarityScore = 1 - (editDistance / Math.max(ans.length, bool[i].ANS.length));
        console.log(similarityScore);
        if (similarityScore > maxScore) {
            maxScore = (similarityScore * 100).toFixed(2) + '%';
            similarAnswer = bool[i].ANS;
        }
    }

    res.send({ maxScore, similarAnswer });
})

// const { insertData } = require("./api/code")
// app.get("/insert", async(req, res) => {
//     const pid = currentPID;
//     const stu_num = snum;
//     const questionNum = Question_num;
//     const assignmentNum = Assignment_num;
//     const ans = ANS;


//     const query = "INSERT INTO Submission(STUCO_ID, QID, ANS) VALUES( ? , ? , ? )";

//     (async() => {
//         const query1 = "SELECT SID FROM Student WHERE stu_num = ? ";
//         const result1 = await db.query(query1, [stu_num]);
//         const sid = result1.SID;
//         const r1 = result1[0].SID;

//         const query2 = "SELECT STUCO_ID FROM StuCoInfo WHERE SID = ? AND PID = ? ";
//         const result2 = await db.query(query2, [sid, pid]);
//         const stucoid = result2.STUCO_ID;

//         const query3 = "SELECT AID FROM Assignment WHERE Assignment_num = ? and PID = ? ";
//         const result3 = await db.query(query3, [assignmentNum, pid]);
//         const aid = result3.AID;

//         const query4 = "SELECT QID FROM Question WHERE Question_num = ? and AID = ? ";
//         const result4 = await db.query(query4, [questionNum, aid]);
//         const qid = result4.QID;

//         var bool = await insertData(query, [stucoid, qid, ans]);
//         console.log("bool", bool);
//     })();

//     res.send()
// })

app.use(logger("dev"));

server.listen(3000, () => {
    console.log(`your application is running on $ { 3000 }`);
});