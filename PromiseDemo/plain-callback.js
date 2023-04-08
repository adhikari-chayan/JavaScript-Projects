function perfectSquare(number, callback){
    const bool = Number.isInteger(Math.sqrt(number));
    if(!bool){
        return callback(`Number ${number} is NOT a perfect square` );
    }
    callback(`Number ${number} is a perfect square`);
}

function callback(data){
    console.log(data);
}

exports.perfectSquare = perfectSquare;

perfectSquare(25, callback);

