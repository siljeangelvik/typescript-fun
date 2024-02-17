// Define ANSI escape codes for color formatting
const yellowTextColor = '\x1b[33m'; // ANSI escape code for yellow text color
const resetTextColor = '\x1b[0m';  // ANSI escape code to reset text color

// Define a string variable 'consoleLogString' with an initial message
export const consoleLogString = `${yellowTextColor}SRC > index.ts > console.log (from codecademyFunctions.ts): ${resetTextColor}`;

// Define a constant variable 'world' with the value 'World'
const world = 'World';
/**
 * Greets the specified person or the world if no one is specified.
 * @param who - The person to greet.
 * @returns A greeting message.
 * !!! Called a "default parameter function."
 * This function use default parameter value(s) to provide a fallback when
 * an argument is not explicitly passed during the function call.
 */
export function hello(who: string = world): string {
    return `'Hello': ${who}!`;
}

/**
 * Greets the specified person or defaults to 'world' if no one is specified.
 * @param who - The person to greet.
 * @returns A greeting message.
 * !!! Called a "default parameter function."
 * This function use default parameter value(s) to provide a fallback when
 * an argument is not explicitly passed during the function call.
 */
export function helloSecondary(who: string = 'Everyone'): string {
    return `'Hello Secondary': ${who}! `;
}

/**
 * Greets the specified name or defaults to 'Anonymous' if no name is provided.
 * @param name - The name to greet.
 * @returns A greeting message.
 */
export function greet(name?: string) {
    return `'Greet': ${name || 'Anonymous'}!`;
}

/**
 * Greets the specified name or defaults to 'Anonymous' if no name is provided.
 * @param name - The name to greet.
 * @returns A greeting message.
 */
export function greetSecondary(name = 'Anonymous') {
    return `'Greet Secondary': ${name}! `;
}

/**
 * Proclaims a status message a specified number of times.
 * @param status - The proclamation status message.
 * @param repeat - The number of times to repeat the proclamation.
 */
export function proclaim(status = 'not ready...', repeat = 1) {
    for (let i = 0; i < repeat || 0; i += 1) {
        console.log(consoleLogString + '\'Proclaim\':' + ` I'm ${status || 'ready!'}`);
    }
}
proclaim(); // Call 'proclaim' with default parameters
proclaim('ready?'); // Call 'proclaim' with a specific 'status' ('ready?') and default 'repeat' (1)
proclaim('ready!', 3); // Call 'proclaim' with both 'status' ('ready!') and 'repeat' (3) specified


/**
 * Returns a random number between 0 (inclusive) and 1 (exclusive).
 * @returns A random number.
 */
export function getRandomNumber() {
    return Math.random();
}
export const myVar = getRandomNumber(); // A constant variable containing a random number.


/**
 * !!! This code is from the Codecademy course TypeScript: Functions 6/9
 * Retrieves the user's choice using an external resource.
 * @returns The user's choice.
 */
//////  import { getUserChoice, f1, f2, f3, f4, f5, f6, f7, f8, f9, f10, f11, f12 } from './resources';
/**
 * Returns a fruit based on the user's choice.
 * @returns The selected fruit or 'durian.jpg' if the choice is invalid.
 */
/* function returnFruit(): string {
    let num = getUserChoice();
    switch (num) {
        case 1:
            return f1();
        case 2:
            return f2();
        case 3:
            return f3();
        case 4:
            return f4();
        case 5:
            return f5();
        case 6:
            return f6();
        case 7:
            return f7();
        case 8:
            return f8();
        case 9:
            return f9();
        case 10:
            return f10();
        case 11:
            return f11();
        case 12:
            return f12();
    }
    return 'durian.jpg';
}
console.log(returnFruit()); */
/////////// The problematic function is f9();

/**
 * Logs a greeting message to the console.
 * @param name - The name to greet.
 */
export function logGreeting(name: string) {
    console.log(`'Log Greeting': ${name}!`);
}

/**
 * Logs a secondary greeting message to the console.
 * @param name - The name to greet.
 */
export function logGreetingSecondary(name: string): void {
    console.log(`'Log Greeting Secondary': ${name}!`);
}

/**
 * Returns the sum of two numbers.
 * @param x - The first input number
 * @param y - The second input number
 * @returns The sum of `x` and `y`
 */
export function getSum(x: number, y: number): number {
    return x + y;
}

/**
 * Uses a magnifying glass for sleuthing with an optional custom message.
 * @param magnify - The custom message for using the magnifying glass.
 * @returns The message indicating the use of the magnifying glass.
 */
function useMagnifyingGlass (magnify: string = 'I will use my magnifying glass.'): string {
    return `${magnify}`;
}

/**
 * Determines the culprit randomly by generating a random number (1 or 2).
 * @returns The randomly chosen culprit number (1 or 2).
 */
function determineCulprit(){
    return Math.floor(Math.random()*2+1);
}

/**
 * Conducts sleuthing based on the provided clues and suspects.
 * @param numberOfClues - The number of clues to consider.
 * @param clue1 - The first clue for the investigation.
 * @param clue2 - The second clue for the investigation.
 * @param suspect1 - The first suspect to consider.
 * @param suspect2 - The second suspect to consider.
 * @returns The culprit or a failure message if unable to determine.
 */
function doSleuthing(numberOfClues:number, clue1:string, clue2:string, suspect1:any, suspect2:any){
    console.log('I am a famous detective and I will solve the crime.');
    useMagnifyingGlass('Why is this here?');

    console.log('Now I consider the first clue: ',clue1);
    console.log('Now I consider the second clue: ',clue2);

    let culpritNumber:number = determineCulprit();
    console.log('Now, I will return to you the culprit. There but for the grace of God go we.' );
    if(culpritNumber == 1) { return(suspect1) }
    if(culpritNumber == 2) { return(suspect2) }

    return "I couldn't figure out who drank the priceless milk. :( :(";
}

let answer: number;

answer=doSleuthing(2, 'The parrot heard everything!', 'All the doors and windows were shut from the INSIDE.', 'Burglar Bob', 'Saint Sam')

//console.log('The culprit was none other than:', answer, '!');
//console.log(`The culprit was none other than ${answer}!`);
console.log(`${yellowTextColor} The culprit was none other than: ${resetTextColor}${answer}!`);