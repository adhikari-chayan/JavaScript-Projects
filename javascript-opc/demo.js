'use strict';
(function() {

//Creating Objects with classes
// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
// }  

// let jim = new Person('Jim', 'Cooper', 29);
// display(jim);


//Creating getters and setters
// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get fullName(){
//     return this.firstName + ' ' + this.lastName;
//   }
//   set fullName(fullName){
//     let nameParts = fullName.split(' ');
//     this.firstName = nameParts[0];
//     this.lastName = nameParts[1];
//   }
// }  

// let jim = new Person('Jim', 'Cooper', 29);
// jim.fullName = 'Fred Jones'
// display(jim.fullName);
// display(jim.firstName);
// display(jim.lastName);


//Adding Functions to classes
// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get fullName(){
//     return this.firstName + ' ' + this.lastName;
//   }
//   set fullName(fullName){
//     let nameParts = fullName.split(' ');
//     this.firstName = nameParts[0];
//     this.lastName = nameParts[1];
//   }

//   isAdult(){
//     return this.age >= 18
//   }
// }  

// let jim = new Person('Jim', 'Cooper', 29);
// jim.fullName = 'Fred Jones'
// display(jim.isAdult());


//Modifying Property Descriptors on classes
// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get fullName(){
//     return this.firstName + ' ' + this.lastName;
//   }
//   set fullName(fullName){
//     let nameParts = fullName.split(' ');
//     this.firstName = nameParts[0];
//     this.lastName = nameParts[1];
//   }

//   isAdult(){
//     return this.age >= 18
//   }
// }  
// Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});

// let jim = new Person('Jim', 'Cooper', 29);

// display(jim);


//Using Inheritance with JS classes
// class Person{
//   constructor(firstName, lastName, age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   get fullName(){
//     return this.firstName + ' ' + this.lastName;
//   }
//   set fullName(fullName){
//     let nameParts = fullName.split(' ');
//     this.firstName = nameParts[0];
//     this.lastName = nameParts[1];
//   }

//   isAdult(){
//     return this.age >= 18
//   }
// }  

// class Student extends Person{
//   constructor(firstName, lastName, age){
//     super(firstName, lastName, age);
//     this._enrolledCourses = [];
//   }

//   enroll(courseId){
//     this._enrolledCourses.push(courseId);
//   }

//   getCourses(){
//     return this.fullName + "'s enrolled courses are: " +
//     this._enrolledCourses.join(', ');
//   }

// }

// let jim = new Student('Jim', 'Cooper', 29);
// jim.enroll('CS205');
// jim.enroll('MA101');
// jim.enroll('PS101');
// display(jim.getCourses());


//Using Static properties and methods
class Person{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get fullName(){
    return this.firstName + ' ' + this.lastName;
  }
  set fullName(fullName){
    let nameParts = fullName.split(' ');
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
  }

  static adultAge = 18;

  isAdult(){
    return this.age >= 18
  }
} 

display(Person.adultAge);

class Student extends Person{
  constructor(firstName, lastName, age){
    super(firstName, lastName, age);
    this._enrolledCourses = [];
  }

  static fromPerson(person){
    return new Student(person.firstName, person.lastName, person.age);
  }

  enroll(courseId){
    this._enrolledCourses.push(courseId);
  }

  getCourses(){
    return this.fullName + "'s enrolled courses are: " +
    this._enrolledCourses.join(', ');
  }

}

let jim = new Person('Jim', 'Cooper', 29);
let jimStudent = Student.fromPerson(jim);
jimStudent.enroll('CS205');
jimStudent.enroll('MA101');
jimStudent.enroll('PS101');
display(jimStudent.getCourses());


// let date = new Date('2050-03-25T13:01:30Z');
// display(date.toString());

let date = new Date(2050, 3, 25, 13, 1, 30, 50); //Only Month is 0-based means Jan is 0, Feb is 1
display(date.toString());

})();