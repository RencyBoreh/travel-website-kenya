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
// let name="Rabby";

// switch (name) {
//   case "Resly":
//     console.log("Yor Name is Resly");
//     break;
//   case "Rabby":
//     console.log("Yor Name is Rabby");
//     break;
//   case "Rency":
//     console.log("Yor Name is Rency");
//     break;

//   default:
//     console.log("Enter a name!");
//     break;
// }

// Ternery operators
// condition ? iftrye :iffalse;
// let soup="Chicken Noodle Soup";
// let response= soup ? "Yes, we have soup" : "Sorry,No soup today."
// console.log(response)


// let con= confirm("OK===True\nCancel===False");
// console.log(con);
// let name=prompt("Enter Your Name:")
// console.log(name)


// function Person(first,last,age,eye){
//   this.firstname=first;
//   this.lastname=last;
//   this.age=age;
//   this.eyecolor=eye;
// } 

// const MyMother= new Person("Rency","Boreh",35,"Black");
// console.log(MyMother);

// let  playGame=confirm("Shall we play rock,paper,or scissors?");
// if (playGame){
//   let playerChoice=prompt("Please enter rock,paper or scissors.");
//    if (playerChoice){
//      let playerOne= playerChoice.trim().toLowerCase();
//       if(playerOne==="rock"|| playerOne==="paper"||playerOne==="scissors"){
//         let computerChoice=Math.floor(Math.random()*3+1);
//         let computer =computerChoice===1? "rock"
//         :computerChoice===2 ? "paper"
//         :"scissors";
//         // let result=
//         // playerOne===computer?"Tie Game!"
//         // :playerOne==="rock" && computer ==="paper"?
//       }
//       else{alert("You did not enter any choice.")}
//     }
   
//    else{
//     alert("I guess you changed your mind.")
//    }
// }
// else{
//   alert("Ok,Maybe Next time");
// }

// ARRays
// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;
// console.log(cars.sort);
// console.log(cars[0]);  //returns the frst element
// console.log(cars[cars.length-1]); //returns the last element of an array
// cars.push("Mazda");  //adds an element to an array
// console.log(cars)
// // another way to create an array is...
// const colors=new Array(); //new keyword can give unexpected results so avoid it
// colors.push("Orange");
// console.log(colors);
// console.log(typeof cars); //returns an object and to solve thiss...
// // 1 Array.isArray()
// console.log(Array.isArray(cars));  //returns true
// console.log(typeof cars);

// const fruits = ["Banana", "Orange", "Apple"];

// console.log(fruits instanceof Array);  // returns true 

// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// } 
// console.log(myObj);

// console.log(cars.toString()); // converts the array to string

// console.log(cars.at(2)); //returns an array elent at a give position

// console.log(cars.join("*"));
// console.log(cars.pop()); //returns the vaue that was popped out

// cars.push("Honda"); //adds an alement to the end of an array
// console.log(cars);
// console.log(cars.shift()); //removes the first item and returns the value that was shifted
// console.log(cars);

// console.log(cars.unshift("Volvos")); //adds a new element to an array at the beginning and unshifts older elemnts and rturns the new array length
// console.log(cars);

// const myGirls=['Cecilie','lone'];
// const myBoys=['Emil','Tobias'];
// const myChildren= myGirls.concat(myBoys); //used t cncat two arrays to form one array
// console.log(myChildren);

// const fruit = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruit.copyWithin(2, 0)); //method copies array elements to another position in an array:


// // const myArray= [[1,2],[3,4],[5,6]];
// // const newArr=myArray.flat();
// // console.log(newArr);

// const myArr = [1, 2, 3, 4, 5, 6];
// const newArr = myArr.flatMap(x => [x, x * 10]);
// console.log(newArr);

//Splicing and Slicing Arrays

// const fruits=['banana','orange','apple','mango'];
// fruits.splice(2,0,"lemon",'kiwi'); //adds new items to an array
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // fruits.splice(2, 2, "Lemon", "Kiwi");
// fruits.splice(0,1);//can be used to remove elemts
// console.log(fruits);

// const months = [" Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced); //returns the new array without changing the original array

//slice is used to slice out a piece of an array into a new array
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);//Slice out a part of an array starting from array element 1 ("Orange"):
// console.log(citrus);

// // loops
// for (let i = 0; i < 10; i++) {
//   const element = i;
//   console.log(element);
// }
// let names={nam:"Rency",age:21,school:"KYU"};
// for(let name in names){
// console.log(names[name]);
// }
// let numbers=[1,2,3,5,7,8,9,44];
// for(let x in numbers){
//   console.log(numbers[x]);
// }
// // looping over an array
// let cars=['BMW','Volvo','Mini'];
// for(let car of cars){
//   console.log(car)
// }
// // looping through a string
// let myName="JEPTANUI";
// for(let mine of myName){
//   console.log(mine);
// }
// // while loop
// let a=0;
// while (a<10) {
//   console.log(a);
//   a++;
// }

// let text='';
// let i=0;
// do {
//   text = "The number is " + i;
//   console.log(text);
//   i++;
// }
// while (i < 10);
// let text='';
// for (let i = 0; i < 10; i++) {
//   if (i === 7) { break; }
//   text = "The number is " + i ;
//   console.log(text);
// }
// for (let i = 0; i < 10; i++) {
//   if (i === 7) { continue; }
//   text = "The number is " + i ;
//   console.log(text);
// }

// Home Made Iterable
function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}

// Create Iterable
const n = myNumbers();
console.log(n.next()) // Returns 10
console.log(n.next()) // Returns 20
console.log(n.next()) // Returns 30
console.log(n.next())


// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return 'I have a ' + this.carname;
//   }
// }

// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ', it is a ' + this.model;
//   }
// }

// let myCar = new Model("Ford", "Mustang");
// document.getElementById("demo").innerHTML = myCar.show();

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
  set cnam(x) {
    this.carname = x;
  }
}

const myCar = new Car("Ford");

document.getElementById("demo").innerHTML = myCar.cnam;