/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
 //let name = "mariam";

 function printName(name){
    console.log(`My name is ${name}`);
     return(name);
 }
  printName("Mariam");

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
 //let birthYear = 1997;
 function printAge(birthYear){
    let age = 2023 - birthYear;
     console.log(`I am ${age} years old`);
     return(age);
 }
  printAge(1997);
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

 let language = "english";
 function printHello(name , language){
 let massage;
     if (language === "english" ){
        console.log(`Hello ${name}`);
     }
 
     else if (language === "spanish"){
        console.log(`Hola ${name}`);
     }
 
     else if (language === "french"){
        console.log(`Bonjour ${name}`);
 
     }
 
     else if (language === "Turkish"){
        console.log(`Merhaba ${name}`);
 
     }
 
     else {
        console.log("Unknown language")
     }
 return name;
 }
 consol.log(printHello("Mariam", language))

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */

let num1 = 6;
let num2 = 8;
function printMax(num1, num2){
 let biggerNumber;
 if (num1 > num2){
    biggerNumber = console.log(num1);
 }
 else {
    biggerNumber = console.log(num2);
 }
 return biggerNumber;
 
 }
 biggerNumber = printMax(num1,num2)