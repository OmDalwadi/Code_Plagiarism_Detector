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

const insertData = async(query) => {
    return new Promise((resolve, reject) => {
        connection.query(query, function(err, result, fields) {
            if (err) {
                console.log("err", err)
            }
            console.log('Data inserted into the database.');
            console.log('Inserted data:', data);
            resolve(result)
        })
    })
}

const levenshteinDistance = function(a, b) {
    // Create a matrix to store the edit distances between substrings of a and b
    const matrix = [];

    // Initialize the first row and column of the matrix to represent the
    // distances between the empty string and substrings of a and b
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Iterate over the remaining cells of the matrix and fill them in with the
    // minimum edit distances between substrings of a and b
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                // If the characters at the current positions in a and b are the same,
                // the edit distance is the same as the distance between the substrings
                // without these characters
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                // If the characters at the current positions in a and b are different,
                // the edit distance is 1 plus the minimum of the distances between the
                // substrings without these characters, plus a deletion, insertion, or
                // substitution
                matrix[i][j] = 1 + Math.min(
                    matrix[i - 1][j - 1],
                    matrix[i][j - 1],
                    matrix[i - 1][j]
                );
            }
        }
    }

    // The edit distance is the bottom-right value in the matrix
    return matrix[b.length][a.length];
}



module.exports = { sendQueryToDatabase, insertData, levenshteinDistance }
    // module.exports = { insertData }