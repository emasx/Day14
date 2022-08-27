// Function = is a piece of code that we can reuse over and over again in our code.

// 1.
function logger() {
    console.log('My name is Emas.');
}

logger(); // invoking, running  or calling the function
logger();
logger();



// 2.

function fruitProcessor(apples, oranges) //parameters = are like variables that are specific only to this function
 {                                     //               and they will get defined once we call the function

    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
} 

const appleJuice = fruitProcessor(5, 0); // arguments are the specific so the actual values of the functions parameters
console.log(appleJuice);


const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice);








// 1. Write a function called 'describeCountry' which takes three parameters:
// 'country', 'population' and 'capitalCity'. Based on this input, the
// function returns a string with this format: 'Finland has 6 million people and its
// capital city is Helsinki'
// 2. Call this function 3 times, with input data for 3 different countries. Store the
// returned values in 3 different variables, and log them to the console



function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const descRomania = describeCountry('Romania', 19, 'Bucharest');

const descGermany = describeCountry('Germany', 83, 'Berlin');

const descFinland = describeCountry('Finland', 6, 'Helsinki');


console.log(descRomania, descGermany, descFinland);