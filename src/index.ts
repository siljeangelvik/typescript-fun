import {consoleLogString, hello, helloSecondary, greet, greetSecondary, myVar, getSum} from "./codecademyFunctions";
// import { myVar, logGreeting, logGreetingSecondary } from "./codecademyFunctions";

// Log a message to the console concatenating 'consoleLogString' and the result of the functions
/*console.log(consoleLogString + hello());
console.log(consoleLogString + hello(`Savanna (2)`));
console.log(consoleLogString + helloSecondary());
console.log(consoleLogString + helloSecondary(`Savanna (3)`));
console.log(consoleLogString + greet());
console.log(consoleLogString + greet(`Savanna (4)`)); // Prints: Hello, Savanna!
console.log(consoleLogString + greetSecondary());
console.log(consoleLogString + myVar);
// console.log(consoleLogString + logGreeting());
// console.log(consoleLogString + logGreetingSecondary());
console.log(consoleLogString + `"getSum": ` + getSum(5051995, 20022001));
*/

console.log(consoleLogString +
    `\n ${hello()}` +
    `\n ${hello('Minik & Savanna! (index.ts)')}` +
    `\n ${helloSecondary()}` +
    `\n ${helloSecondary('Minik & Savanna! (index.ts)')}` +
    `\n ${greet()}` +
    `\n ${greet('Minik & Savanna! (index.ts)')}` +
    `\n ${greetSecondary()}` +
    `\n ${greetSecondary('Minik & Savanna! (index.ts)')}` +
    `\n 'getRandomNumber' myVar: ${myVar}` +
    `\n 'getSum' param(x) + param(y): ${getSum(5051995, 20022001)}`
);
