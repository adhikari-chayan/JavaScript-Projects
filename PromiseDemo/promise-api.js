function perfectSquare(number){
    return new Promise(function(resolved, rejected){
        const bool = Number.isInteger(Math.sqrt(number));
        if(!bool){
            return rejected(new Error(`Number ${number} is NOT a perfect square`));
        }
        resolved(`Number ${number} is a perfect square`);
    });
}


perfectSquare(23)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})