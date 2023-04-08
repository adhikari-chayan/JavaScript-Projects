// Importing the fs module
const fs = require('fs');
// Importing util module
const util = require('util');
// Use promisify to fs.readFile to promise based method
const readFile = util.promisify(fs.readFile);
readFile('./promise.txt', 'utf8') // Reading the .txt file
.then((text) => {
    console.log(text);
})
.catch((err) =>{
    console.log('Error', err);
});