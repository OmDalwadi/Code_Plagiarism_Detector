const { default: stringSimilarity } = require("./string-similarity");

function extractText(file) {
    // Read the file's contents using the FileReader API
    const reader = new FileReader();
    reader.readAsText(file);

    // Use a promise to wait for the file to be read
    return new Promise((resolve, reject) => {
        reader.onload = () => {
            // Remove all space characters and escape double quotes
            const text = reader.result.replace(/\s/g, "").replace(/"/g, "\\\"");
            resolve(text);
        };
        reader.onerror = reject;
    });
}

function compareStrings() {
    const result = stringSimilarity("text 1", "text 2");
    console.log(result * 100 + '%');
}

compareStrings();

// Select a file using the HTML input element
const fileInput = document.querySelector("input[type=file]");
const file = fileInput.files[0];

// Extract and clean the text from the file
extractText(file).then(text => {
    // Use the extracted text in your program
    console.log(text);
});

extractText("../html/comparision_page.html").then(text => {
    console.log(text);
});