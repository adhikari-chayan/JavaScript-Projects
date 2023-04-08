const { perfectSquare } = require("./plain-callback");
const util = require("util");

let promiseCall = util.promisify(perfectSquare);

promiseCall(25)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
});



