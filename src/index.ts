// Define a constant variable 'world' with the value 'world'
const world = 'world';

// Define ANSI escape codes for color formatting
const yellowTextColor = '\x1b[33m'; // ANSI escape code for yellow text color
const resetTextColor = '\x1b[0m';  // ANSI escape code to reset text color

// Define a string variable 'consoleLogString' with an initial message
let consoleLogString = `${yellowTextColor}BUILD > INDEX.JS > console.log: ${resetTextColor}`;

// Create a function 'hello' that takes an optional parameter 'who' with a default value of 'world'
export function hello(who: string = world): string {
    // Return a string using a template literal with the provided or default value
    return `Hello ${who}! `;
}

// Log a message to the console concatenating 'consoleLogString' and the result of the 'hello' function
console.log(consoleLogString + hello());