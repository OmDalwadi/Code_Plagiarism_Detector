const { default: stringSimilarity } = require("./string-similarity");

function compareStrings() {
    const result = stringSimilarity("text 1", "text 2");
    console.log(result * 100 + '%');
}

compareStrings();