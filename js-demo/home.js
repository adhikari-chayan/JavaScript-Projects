if(5 === 5){
    console.log('Yes');
}

if(5 > 10){
    console.log('No');
}

let state = 'FL';
let taxPercent = 0;

if(state === 'FL'){
    taxPercent = 7;
}

console.log(taxPercent);

for(let i = 0; i < 3; i++){
    console.log(i);
}


function logMessage(){
    console.log('Here is a message');
}

logMessage();

let myFunction = function (message){
    console.log(message);
}

myFunction('Hello!!!');

let key = 42;

function getSecretCode(value){

    let keyGenerator = function(){
        let key = 12;
        console.log('in keyGenerator: ',key);
        return key;
    }

    let code = value * keyGenerator();
    console.log('in getSecretCode: ', key);
    return code;
}

console.log(getSecretCode(2));

let mySymbol = Symbol();

let person = {
    name: 'John',
    age: 32,
    partTime: false,
    [mySymbol]:'secretInformation',
    showInfo: function(){
        showMessage(this.name);
    }
};

person.age = 33;
person['age'] = 44;

console.log(person.age);

person.showInfo();

let message = 'Hello';

function changeMessage(message){
    message = 'Hi!';
}

changeMessage(message);
showMessage(message);

const values = ['a', 'b', 'c'];
values.push('d','e','f');
const first = values.shift();
values.unshift('hello', 'world');
console.log(values, first);

const arr = ['a', 'b', 'c','d', 'e'];

const newArr = arr.slice(1,4);

arr.splice(2,1)

console.log(arr);

console.log(newArr);

const valueArray = ['a', 'b', 'c','d','z'];
console.log(valueArray.indexOf('a'));
console.log(valueArray.indexOf('d'));

const set = valueArray.filter(function(item){
    console.log('item: ',item);
    return item > 'b';
});

console.log(set);

const valueArray1 = ['a', 'bbb', 'ccccc'];


const found = valueArray1.find(function(item){
    return item.length > 1;
});

console.log(found);



function showProductId(){
 let productId = 12345;

 function fix(){
    let productId = 45678;
    console.log('in fix: ', productId);
 }

 fix();

 console.log('isn showProductId: ', productId)

}

showProductId();