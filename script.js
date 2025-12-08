// function sampleFunction() {
//     age = 20;
//     if (age >= 19) {
//         console.log("he is an adult");
//         console.log("age:", age);
//     }
//     else if (age == 18) {
//         console.log("age is exactly 18");
//         console.log("age:", age);
//     } else {
//         console.log("age is less than 18");
//         console.log("age:", age);
//     }

// }

// sampleFunction();
// let totalMarks = 10;
// markCalculater();
// function markCalculater() {
//     if (totalMarks <= 25) {
//         console.log("Grade D");
//     } else if (totalMarks <= 50) {
//         console.log("Grade C");
//     } else if (totalMarks <= 75) {
//         console.log("Grade B");
//     } else {
//         console.log("Grade A");
//     }
// }

//Loop's in JavaScript
// for (let i = 1; i <= 10; i++) {
//     console.log("5x" + i + "=" + (5 * i));

// }
//Loop to print odd numbers between 1 to 20

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log("this is odd number:", i);
//     } else {
//         console.log("This is even number:", i);
//     }
// }
// while loop in java script
// let i = 1;
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log("even number:", i);
//     } else {
//         console.log("odd number:", i);
//     }
//     i++;

// for (let i = 1; i <= 20; i++) {
//     if (i % 2 !== 0) {
//         console.log("this is odd number:", i);
//     }
//     else {
//         console.log("This is even number:", i);
//     }
// }
// while loop in java script
// let i = 1;
// while (i <= 10) {
//     if (i % 2 == 0) {
//         console.log("even number:", i);
//     }
//     else {
//         console.log("odd number:", i);
//     }
//     i++;
// }
//array in javascript
// let fruits = ["Apple","Banana","Mango","Orange"];
// console.log(fruits[1]);
// fruits.push('Grapres');
// console.log(fruits);"
// fruits.pop();
// console.log(fruits);
//Functions in javaScript
// document.getElementById("demo").innerHTML = greetUser("Ajas");
// function greetUser(name) {
//     let massage = "Hello " + name + "👋" + ",welcome to JavaScript programming!";
//     return massage;
// }
// greetUser("Ajas");
// }
//function sample function
// function sampleMarkCalculater(mark) {
//     if (mark >= 90) {
//         console.log("Grade A+");

//     } else if (mark >= 80) {
//         return "Grade A";

//     } else if (mark >= 70) {
//         return "Grade B";

//     } else if (mark >= 60) {
//         return "Grade C";
//     } else if (mark >= 50) {
//         return "Grade D";
//     } else {
//         return "Failed";
//     }
// }
// let mark = 50;
// let result = sampleMarkCalculater(mark);
// console.log("mark:", mark, "Grade:", result);
//OOPS consept
//class and object//
// class mobile {
//     constructor(brand, price) {
//         this.brand = brand;
//         this.price = price;
//     }
//     showDetails() {

//         console.log("brand:", this.brand, "Price:", this.price);
//     }
// }
// let mobile1 = new mobile("Samsung", 150000);
// let mobile2 = new mobile("Vivo", 40000);
// mobile1.showDetails();
// mobile2.showDetails();

// class Student {
//     constructor(name, rollNo, marks) {
//         this.name = name;
//         this.rollNo = rollNo;
//         this.marks = marks;
//     }
//     studentDetails() {
//         let total = 0;
//         for (let mark of this.marks) {
//             total += mark;
//         }
//         console.log('name:', this.name);
//         console.log("rollNo:", this.rollNo);
//         console.log("marks:", this.marks);
//         console.log("total:", total);
//         console.log("..................................");

//     }
// }
// let s1 = new Student("Ajas", 2, [30, 34, 43]);
// let s2 = new Student("Ajnas", 33, [75, 78, 60]);
// s1.studentDetails();
// s2.studentDetails();
//inheritence in java script//
// class Brand {
//     constructor(name, engin) {
//         this.name = name;
//         this.engin = engin;
//     }
//     printDetails() {
//         console.log("name:", this.name);
//  3       console.log("age: ", this.engin);
//     }
// }
// class Car extends Brand {
//     constructor(name, engin, fuelType) {
//         super(engin, name);
//         this.fuelType = fuelType;
//     }
//     consoleCarDetails() {
//         console.log("fuelType:", this.fuelType);
//     }
// }
// let stu1 = new Car("Toyota","2.5 ltter turbo charged inline 4 cylinder engine","Disal");
// stu1.printDetails();
// stu1.consoleCarDetails();
// class Amina {
//     #name;
//     constructor(age, name) {
//         this.#name;
//         this.age = age;
//         this.us = document.createElement("h1");
//         this.us.innerHTML = name;
//         this.us.style.fontSize = "60px";
//         document.body.appendChild(this.us);
//     }

//     setname(name) {
//         this.#name = name;
//         this.us.innerHTML = name;
//     }
//     getname() {

//         return this.#name;

//     }

// }

// let user1 = new Amina(23, "Ajas");
// user1.setname("Amina");
// console.log(user1.getname());
// class Ajas {
//     #name;

//     constructor(age, name) {
//         this.#name;
//         this.age = age;
//         this.u1 = document.createElement("h1");
//         this.u1.innerHTML = name;
//         document.body.appendChild(this.u1);
//     }
//     constructor(age) {
//         this.age = age;
//         this.u2 = document.createElement("h1");
//         this.u2.innerHTML = age;
//         document.body.appendChild(this.age);
//     }

//     setvalue(name, age) {
//         this.#name = name;
//         this.u1.innerHTML = name;
//         console.log(age);
//     }

//     getvalue() {
//         return this.#name;
//     }
// }

// let user1 = new Ajas();
// user1.setvalue("Tharajith", 36);
// console.log(user1.getvalue());

//Encapsulation//
// class UserPass {
//     #name;
//     #password;
//     constructor(name, pass) {
//         this.#name = name;
//         this.#password = pass;
//     }
//     setItem(name, pass) {
//         this.#name = name;
//         this.#password = pass;
//     }
//     getItem() {
//         return { name: this.#name, password: this.#password };
//     }
// }
// let user1 = new UserPass();
// user1.setItem("Ajas", "Muhammed#$#4");
// console.log(user1.getItem());
// class Account{
//   #balance;
//   constructor(amount){
//     this.#balance=amount;
//   }
//   setAmount(amount){
//     this.#balance+=amount;
//   }
//   withdraw(amount){
// sound(){
// console.log("some sound....");
// }    if(amount<=this.#balance){
//       this.#balance-=amount;

//     }else{
//       console.log("insufficient balance");
//     }
//   }
//   getAmount(){
//     return this.#balance;
//   }
//   }
//   let user1 = new Account(5000);
//   user1.setAmount(500);
//   user1.withdraw(300);
//   console.log(user1.getAmount());
///polymorphism///
// class Animal {
//     sound() {
//         console.log("Some sound...");
//     }
// }
// class Dog extends Animal{
//     sound(){
//         console.log("this is sound");
//     }
// }
// class Cat extends Animal{
//     sound(){
//         console.log("this is cat sound");
//     }
// }
// let a1 =new Dog();
// let a2 =new Cat();

// a1.sound();
// a2.sound();

// class Companies {
//     subBrands() {
//         console.log("Display brand's");
//     }
// }
// class Google extends Companies {
//     subBrands() {
//         console.log("Android");
//     }
// }
// class Microsoft extends Companies {
//     subBrands() {
//         console.log("Git Hub");
//         console.log("Bing");
//     }
// }
// class Oracle extends Companies {
//     subBrands() {
//         console.log("Oracle....")
//         console.log("Siebel Systems");
//     }

// }
// let user0 = new Companies();
// let user1 = new Google();
// let user2 = new Microsoft();
// let user3 = new Oracle();

// user0.subBrands();
// user1.subBrands();
// user2.subBrands();
// user3.subBrands();
// Abstraction//
// class PaymentSystem {
//     #balence;
//     constructor(balance) {
//         this.#balence = balance;
//     }
//     makePayment(amount) {
//         if (amount <= this.#balence) {
//             console.log("Processing payment of ₹" + amount + "...");
//             this.#balence -= amount;
//             console.log("Payment successfull");
//         } else {
//             console.log("insufficient balence");
//         }
//     }
//     getBalence() {
//         console.log("remining balance:", this.#balence);
//         return this.#balence;
//     }
// }
// let user1 = new PaymentSystem(100);
// user1.makePayment(300);
// user1.getBalence();
//my sample project//
// class PaymentSystem {
//     #balance;
//     constructor(balance) {
//         this.#balance = balance;
//         console.log("this is minimum balance");
//         console.log(this.#balance);
//         console.log("---------------------------");
//     }
//     deposit(amount) {
//         if (amount>=this.#balance) {
//             console.log("Processing payment of ₹", amount, "...");
//             console.log((this.#balance  +=amount));
//             console.log("payment successfull");
//             console.log("---------------------------");
//         }else{
//         console.log("insufficient balance");
//         }

//     }
//     withdraw(amount) {
//         if (amount <= this.#balance) {
//             this.#balance -= amount;
//             console.log("withdraw amount:", amount);
//         } else {
//             console.log("Insufficient balance added");
//         }
//         console.log("---------------------------------");
//     }
//     getBalance() {
//         return console.log(this.#balance);
//     }
// }
// let user1 = new PaymentSystem(1000);
// user1.deposit(10000);
// user1.withdraw(1000);
// user1.getBalance();
// second project
// class StudentDetails {
//     constructor(name, rollNo, marks) {
//         this.name = name;
//         this.rollNo = rollNo;
//         this.marks = marks;
//     }

//     displayStudent() {
//         console.log(this.name);
//         console.log(this.rollNo);
//         console.log(this.marks);
//         let total = 0;
//         for (let i = 0; i < this.marks.length; i++) {
//             total += this.marks[i];
//         }
//         console.log(total);
//     }
// }
// let student1 = new StudentDetails("Ajas", 3, [23, 32, 23]);
// let student2 = new StudentDetails("Ajnas", 6, [23, 62, 23]);
// let student3 = new StudentDetails("Afnas", 9, [23, 42, 23]);
// let student4 = new StudentDetails("Anfas", 12, [23, 42, 23]);

// let student = [student1, student2, student3, student4];
// let bestStudent = student[0];
// for (let i = 0; i < student.length; i++) {
//     if (student[i].displayStudent() > bestStudent.displayStudent()) {
//         bestStudent = student[i];
//     }
// }
// console.log("\ud83c\udf3f Best Student \ud83c\udf3f"); // emogy code
// bestStudent.displayStudent();
//ES6 Started//
//Arrow function//

// function ajas(name) {
//     //this is normal function//
//     return "hello " + name;
// }
// console.log(ajas("Ajas"));
// //Arrow function//
// const ajnas = (name) => {
//     return "hello " + name;
// };
// console.log(ajnas("Ajnas"));
// //short arrow function//
// const afnas = (name) => "Hello " + name;
// console.log(afnas("Afnas"));
//Array destructuring
// let studnt=["Ajas","Ajnas",45];
// let destructuringData=[name,name,age] =studnt;
// console.log(name,name,age);
////////////////DESTRUCTURING//////////////////
//with out destructuring//

// let array =["Meta","Google","Apple"];
// let a =array[0];
// let b =array[2];
// let c =array[3];

//with destructuring //

// let [a,b,c] =["Meta","Google","Apple"];
// console.log(a,b,c);

///Skip value in Destructuring///

// let [x, ,z] =[1,2,3];
// console.log(x,z);

//Default value//
// let [p=100,q=4434]=[50];
// console.log(p,q);

//Swap variables//

// let a=20,b=30;
// [a,b]=[b,a];
// console.log(`Rsult is :${a}`);

///////Object Destructuring////////

//with out destructur//
// let details = {
//     name: "Ajas",
//     age: 34
// }

//with Destructuring//

// let details = {
//     name: "Ajas", age: 34,
// };
// let {name,age} =details;
// console.log(age);

//Rename variable//
// let { name: fullname, age: old } = { name: "Ajas", age: 43 };
// console.log(fullname, old);

//Default  values//
// let { name, age = 18 } = { name: "Ajas" };
// console.log(name, age);

//Nested Destructuring//
// let student = {
//     name: "Ajas",
//     mark: { math: 3, english: 34 }
// }
// let { mark: { math: m, english: e } } = student;
// console.log(e,m);

//Destructuring in Function//
// function details({ name, age }) {
//     console.log(name, age);

// }
// details({ name: "Ajas", age: 34 });

//Array destructuring in functino//

// function show([a,b]){
//     console.log(a,b);
// }
// show([34,35])

//Destructuring in ...Rest operator//

//ARRAY//
// let [a,b,...rest] =[10,20,30,40];
// console.log(rest);

//OBJECT//

// let {name,...other}={
//     name:"Ajas",
//     age:34,
//     place:"kannur"
// }
// console.log(other);

// spread and rest operator//

//  Spread with array //
// let a = [10, 20, 30];
// let b = [...a];
// console.log(b);
//  merge arrays  //
// let a = [1,2];
// let b = [3,4];

// let c = [...a, ...b];
// console.log(c);

// Add extra value //

// let a =[1,2];
// let b=[...a,"Ajas","Ajnas"];
// console.log(b);

// spread with string //

// const a = "AJAS";
// console.log(...a);

//Copy object//
// let x ={
//     companyName:"Grok",
//     founder:"Elon musk",
//     foundedDate:2023
//     }
//     let ajas={...x,};
//     console.log(ajas);
//     //Update Object with spread operator//
// ajas={
//     ...x,shareHolder:"Ajas"
// }
// console.log(ajas);
//Merge with object//
// let google={
//     product:"Gemini",
//     date:2023,
// }
// let tesla={
//     catogary:"auto Ai",
// }
// let assumbleBrands={
//     ...tesla,...google,
// }
// console.log(assumbleBrands);

// Spread in function //

// let nums = [1.9,40,20];
// console.log(Math.round(...nums));

//Real life example//
// let oldProduct =["shirt","shoe"];
// let newProduct =["hoody"];

// let Update =[...oldProduct,...newProduct];

// console.log(Update);

//////////////////// MAP /////////////////////
///MAP OF STRING ///
// let startUp=["zomato","Uber","clawer"];
//     let upper =startUp.map(n=>n.toUpperCase());
//     console.log(upper);

/// MAP OF NUMBERS ///
// let num=[20,30,44];
// let nub = num.map(n=>n*2);
// console.log(nub);

///ARRAY OF OBJECT IN MAP///
// let companys = [
//     { name: 'Meta', catogory: "Social network" },
//     { name: "Google", catogory: "search engine" }
// ];
// let details = companys.map(n => n.name);
// console.log(details);
/// Map() Never changes orgianl array ///

// let a =[10,20,30];
// let b = a.map(n=> n+1);
//  console.log(a);
//  console.log(b);

// practice project//

// let marks = [10, 20, 30, 40, 50];
// let addedMarks = marks.map(adding => adding + 5);
// console.log(addedMarks);
// console.log(marks);

///////Filter()/////////
// let data=[10,20,30,40,50];
// let fData = data.filter(a=>a>=20);
// console.log(fData);
// console.log(data);

////////even numbers filter()////

// let nums =[1,2,3,4,5,6,7,8,9];
// let fNums =nums.filter(n=>n % 2==0);
// console.log(fNums);

///////String filtering()///////////

// let names =["Ajas","Ajnas","Afnas","Tharajith"];
// let fNames =names.filter(a=>a.endsWith("h"));
// console.log(fNames);    

////////Array of object with filter()//////////////////

// let companies =[
//     {name:"Tesla",foundedBy:"Elon musk",rating:90},
//     {name:"Google",foundedBy:"Larry page and Sergey Brin",rating:80},
//     {name:"Meta",foundedBy:"Mark Zukerberg",rating:75}
// ];
// let fCompanies =companies.filter(a=>a.rating>76);
// console.log(fCompanies);

////////////////practice of filter()////////

// let numbers=[10,30,20,40,60,80,35];
// let fnumbers=numbers.filter(filteredValue=> filteredValue>=40);
// console.log(fnumbers);

/////// reduce() operator /////////
