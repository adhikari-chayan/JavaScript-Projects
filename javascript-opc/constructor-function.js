'use strict';
(function() {

  //Using Object Literals to create objects
  // let person = {
  //   firstName:'Jim',
  //   lastName:'Cooper',
  //   age: 17,
  //   isAdult : function(){
  //     return this.age >=18;
  //   }
  // };


  //Using Object Literals method declaration shorthand
  // let person = {
  //   firstName:'Jim',
  //   lastName:'Cooper',
  //   age: 17,
  //   isAdult(){
  //     return this.age >=18;
  //   }
  // };

  // display(person.isAdult());


  //Object Literal Property Shorthand
  // function registerUser(firstName, lastName){
  //   let person = {
  //     firstName,
  //     lastName
  //   };

  //   display(person);
  // }

  // registerUser('Jim', 'Cooper');


  //Get object keys 
  // let person = {
  //   firstName: 'Jim',
  //   lastName: 'Cooper',
  //   age: 18,
  //   isAdult(){
  //     return this.age >= 18;
  //   }
  // };

  // display(Object.keys(person));

  // for(let propertyName in person){
  //   display(propertyName);
  // }


  //Object assign and Immutability
//    let person1 = {
//     firstName: 'Jim',
//     lastName: 'Cooper',
//     age: 18,
//     isAdult(){
//       return this.age >= 18;
//     }
//   };

//   let person2 = {};

//   Object.assign(person2, person1);

//   display(person2);
//   display(person1 === person2);

//   let healthStats = {
//     height: 68,
//     weight: 150
//   };

//  function mergrHealthStats(person, healthStats){
//     //return  Object.assign(person, healthStats);
//     return Object.assign({}, person, healthStats);
//  }

//  let mergedPerson = mergrHealthStats(person1, healthStats);

//  display(mergedPerson);


    //Construtor functions to create objects
    // function Person(){
    //   this.firstName = 'Jim';
    //   this.lastName = 'Cooper';
    // }

    // let person = new Person();

    // display(person);

    // function Person(firstName, lastName, age){
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    //   this.age = age;
    //   this.isAdult = function(){
    //     return this.age > 21;
    //   }
    // }

    // let person = new Person('Jim','Cooper', 29);

    // display(person.isAdult());


    //Use Object.create()

    // let person1 = {
    //   firstName:'Jim',
    //   lastName:'Cooper',
    //   age:29
    // };

    // let person2 = Object.create(
    //   Object.prototype,
    //   {
    //     firstName:{value:'Jim', enumerable:true, writable:true, configurable:true},
    //     lastName: {value:'Cooper', enumerable:true, writable:true, configurable:true},
    //     age:{value:29, enumerable:true, writable:true, configurable:true},
    //   }
    // );

    // display(person1)
    // display(person2)


    //Using Bracket Notation to access Javascript properties
    // let person = {
    //   firstName:'Jim',
    //   lastName:'Cooper',
    //   age:29
    // };

    // let propertyName = 'firstName';
    // display(person[propertyName]);

    // for(let propertyName in person){
    //   display(propertyName +': '+person[propertyName]);
    // }


    //what is prototype
    // let myFunction = function(){ }

    // display(myFunction.prototype);

    // let person = {
    //   firstName:'Jim'
    // };

    // display(person.prototype);
    // display(person.__proto__);


    //Instance vs Prototype Properties
    // function Person(firstName, lastName){
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    // }

    // Person.prototype.age = 29;

    // let jim = new Person('Jim', 'Cooper');
    // let sofia = new Person('Sofia', 'Cooper');

    // jim.age = 18;

    // display(jim.age);
    // display(jim.__proto__.age);
    // display(sofia.age);


    //Changing a functon's prototype
    // function Person(firstName, lastName){
    //   this.firstName = firstName;
    //   this.lastName = lastName;
    // }

    // Person.prototype.age = 29;

    // let jim = new Person('Jim', 'Cooper');
    // let sofia = new Person('Sofia', 'Cooper');

    // jim.age = 18;

    // Person.prototype = { age: 18 };

    // display(jim.prototype);
    // display(jim.age);    
    // display(sofia.age);


    // //Creating own prototypal inheritance chain
    function Person(firstName, lastName, age){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      Object.defineProperty(this, 'fullName',{
        get: function(){
          return this.firstName + ' ' + this.lastName
        },
        enumerable:true
      });

      
    }

    function Student(firstName, lastName, age){
      Person.call(this, firstName, lastName, age);
      this._enrolledCourses = [];

      this.enroll = function(courseId){
        this._enrolledCourses.push(courseId);
      };

      this.getCourses = function(){
        return this.fullName + "'s enrolled courses are: " +
          this._enrolledCourses.join(', ');
      };
    }
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;

    let jim = new Student('Jim', 'Cooper', 29);
    jim.enroll('CS205');
    jim.enroll('MA101');
    jim.enroll('PS101');

    display(jim.getCourses());    
    display(jim);
    display(jim.__proto__);
    display(jim.__proto__.__proto__);
    

})();