// console.log("Hello");
// console.log("First js practice");
// // Variables
// // store information-containers
// console.log("welcome to variables");
// var names='Rency Jeptanui Boreh';
// console.log(names);
// var name="Rency";
// console.log(name);
// const myname="rency boreh";
// console.log(myname)
//  var name="boreh";
//  console.log(name);


// //  Data Types
// // string
// let name1="Resly Jerop"; //can be single or double quotes
// console.log(name1);
// // numbers
// let x=10;
// let y=12.5;
// console.log(x+y);
// // booleans
// let student=true;
// let drinking=false;
// console.log(student);
// // null
// let name2=null; // empty values that will be changed later
// console.log(name2);
// name2="Boreeh";
// console.log(name2)
// // undefined
// let name3;
// console.log(name3);
// // object
// let students={
//   name:"Rency Boreh",
//   age:10,
//   course:"Software Engineering"
// }
// console.log(students)
// console.log(students.name + "," + students.age + ',' + students.course);
// // backticks
// let first_name="Resly";
// let last_name="Jerop";
// let age=22;
// console.log(`Hello ${first_name} , You are ${age} years old`);
// // arrays
// const arr=[1,2,3,4,5,6,7];
// console.log(arr);


// // comparison operators =>true/false
// let a=10;
// let b=20;
// console.log(a>b);
// console.log(b>a);

// // logical operators
// // AND...&& chacks if all operands are true
// console.log(true && false); //false
// console.log(true && true); //true
// console.log(false && false); //false
// // OR || at least one operand is true
// console.log(true || false); //true
// console.log(true || true); //true
// console.log(false || false); //false
// // NOT ! converts 
// console.log(!false); //true
// console.log(!true); //false


// // logical and Control flow
// const age=18;
// if(age>10){
//  console.log('You may enter');
// } else if(age<10){
//   console.log('you cannot enter');
// }
// else{
//   console.log('Grow Up');
// }


// while loop
// while(condition){
//   // code to be executed
// }
// let x=0;
// while (x<10) {
//   console.log(x);
//   x++;
// }


// for loops---runs for a specific time
// let x=0;
// for (let x= 0; x<20; x++) {
//    console.log(x); 
// }

// Functions
// block of codes that perfoms a task
// function squire(number) {
//   return number * number;  //value to be returned when we call a function
// }
// const result= squire(5);
// console.log(result);
// console.log(squire(10))
//  function greetings(name){
//   console.log(`Hi ${name}`);
//  }
//  greetings("Rency");
 
// const greetings= function(name){
//   console.log(`Hello ${name}`)
// }
// greetings("Resly");
 const greeting=(first_name,last_name)=>{
  console.log(`Hello ${first_name} ${last_name}.`)
 }
 greeting("Rency","Boreh");
 const student={
  name:"Rency Boreh",
  age:21,
  course:"Software Engineering"
 }
 document.getElementById("paragraph").innerHTML=student;
 // Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};
// // Display Properties
// document.getElementById("demo").innerHTML =
// person.name + "," + person.age + "," + person.city;

// Displaying Properties in a Loop
// Build a text
// let text='';
// for(let x in person){
//   text +=person[x];
// }
// document.getElementById("demo").innerHTML = text;


// using object.values()
// const myArray=Object.values(person);
// // Displaying an array
// document.getElementById("demo").innerHTML = myArray;


// Object.entries()
// const fruits={Bananas:300,Oranges:200,Apples:500};
// let text="";  
// for(let [fruit,value] of Object.entries(fruits)){
//   text+=fruit + ":" + value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;


// Using JSON.stringify()-conerts objects int
// let name="Rency Boreh";
// let name2=name.charAt(Math.floor(Math.random() * 11 +1))
// console.log(name2)

// let soup="chicken noodle soup";
// let reply;
// if (soup) {
//   reply=`Here's Your Order of ${soup}`;
// }
// else{
//   reply="Sorry we're out of soup";
// }
// console.log(reply);


// let testscore=30;
// let grade;
// if (testscore >= 90){
//   grade="A";
// }
// else if(testscore>=70){
//   grade="B";
// }
// else if(testscore>=60){
//   grade="C";
// }
// else if (testscore>=40){
//   grade="D";
// }
// else if(testscore < 40){
//   grade="E";
// }
// else{
//   grade="Missing Mark";
// }
// console.log(grade)
let name="Rabby";

switch (name) {
  case "Resly":
    console.log("Yor Name is Resly");
    break;
  case "Rabby":
    console.log("Yor Name is Rabby");
    break;
  case "Rency":
    console.log("Yor Name is Rency");
    break;

  default:
    console.log("Enter a name!");
    break;
}