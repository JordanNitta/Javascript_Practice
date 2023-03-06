// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)
// Answer 
// For the first console.log it will print Tesla since its the first element in the array.
// Second console.log will print mercedes and the comma will make sure it skips the first element of the array

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// //Predict the output
console.log(name);
console.log(otherName);
// It will give an error because name has not been defined in any part of the code
// The last line will assigned elon to variable called otherName

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
// Will show the password 12345
console.log(hashedPassword);
// It tries to assign password property of person to a new variable called hashedPassword but since there is no password property in the object hasedPassword it will be undefined

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// Will print Value
console.log(secondKey);
// Will print the array of secondKey
console.log(secondKey[0]);
// Will print 1
console.log(willThisWork);
// It will print 5 because since there is a comma in front of it will ignore the first element and assign the second element 