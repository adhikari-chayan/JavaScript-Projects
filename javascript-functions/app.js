// function printAll(){

//     for(let i=0; i< arguments.length;i++){
//         console.log(arguments[i]);
//     }
// }

// printAll(1,2,3,4,5);
// printAll(10,20);

let greeting = (function(){
    let message = 'Hello';

    let getMessage = function(){
        return message;
    }

    return{
        getMessage:getMessage
    };
})();

console.log(greeting.getMessage());

function setupCounter(val){
    return function(){
        return val++;
    }
}

let counter1 = setupCounter(0);
console.log(counter1());
console.log(counter1());

let counter2 = setupCounter(10);
console.log(counter2());
console.log(counter2());

let greet = name => 'Hello ' + name;
let message = greet('John');
console.log(message);

let sum = (num1, num2) => num1+num2;
console.log(sum(4,5));

let messageObj = {
    name:'John',
    regularFunction: function(){
        console.log(this);
        console.log('Hello '+ this.name);
    },

    arrowFunction: () => {
        console.log(this);
        console.log('Hi '+ this.name);
    }
}

messageObj.regularFunction();
messageObj.arrowFunction();


var standAloneFunc = function(){
    console.log(this);
}
  
//standAloneFunc(); // [object Window]

  var bunny = {
    name: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks: function() {
      console.log(this);  
      this.tasks.forEach(function(task) {
        console.log(this);
        console.log(this.name + " wants to " + task);
      });
    }
  };

  //bunny.showTasks();

  var bunny1 = {
    name: 'Usagi',
    tasks: ['transform', 'eat cake', 'blow kisses'],
    showTasks() {
      this.tasks.forEach((task) => {
        console.log(this);
        console.log(this.name + " wants to " + task);
      });  
    }
  };
  
  //bunny1.showTasks();