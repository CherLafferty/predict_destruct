// 1. GIVEN
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
// will console full arrray--oh
// randomCar variable b/c no comma consoles
console.log(randomCar)
// will console "Mercedes"
console.log(otherRandomCar)

// 2. GIVEN
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
// not sure, I have a line thru name
// I am thinking undefined-actually 'name is not defined'
// console.log(name);
// will console full list
// actual- 'Elon'
console.log(otherName);

// 3. GIVEN
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
// I'm going to get this one
// '12345'
console.log(password);
// '12345'-WRONG, Actual 'undefined' b/c
// property names MUST match exactly
// when deconstructing from objects
console.log(hashedPassword);

// 4. GIVEN
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
// I thought == was not permissible in JS?
// But is. So, first = 2, second = 5, third = 2
// == is a boolean comparison operator true/false
// first console is false, 2 !== 5
console.log(first == second);
// second console is true, 2 == 2
console.log(first == third);

// 5. GIVEN
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
// Nested deconstruct array w/in list
// 'value'-CORRECT GUESS
console.log(key);
// [1, 5, 1, 8, 3, 3]-CORRECT GUESS
console.log(secondKey);
// '1'-CORRECT GUESS
console.log(secondKey[0]);
// will not work, need {}-WRONG/Did work
console.log(willThisWork);