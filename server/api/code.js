const { connection } = require('../dbConnect');
const sendQueryToDatabase = async(query) => {

    // Send the query to the database and store the result
    return new Promise((resolve, reject) => {
        connection.query(query, function(err, result, fields) {
            if (err) {
                console.log("err", err)
            }
            resolve(result)
        })


    })


}




module.exports = { sendQueryToDatabase }