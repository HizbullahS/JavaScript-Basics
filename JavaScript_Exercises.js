//EXERCISES

// function maxOfTwo(num1, num2) {
//   return (num1 > num2) ? num1 : num2;
// }
// const number = maxOfTwo(1, 2);
// console.log(number);


// function isLand(width, height) {
//   if (width > height) return true;
//   else return false;
// }

// const land = isLand(40, 50);
// console.log(land);

//FixxBuzz
// Divisible by 3 = fizz
// Divisible by 5 = Buzz
// Divible by Both = fizzBuzz
// Not Divisible = Same Number
// Not a number = 'Not a Number'

// const output = fizzBuzz(15);
// console.log(output);

// function fizzBuzz(input) {

//   if (typeof input !== 'number')
//     return 'Not a Number';

//   if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';

//   if (input % 3 === 0)
//     return 'Fizz';

//   if (input % 5 === 0)
//     return 'Buzz';

//   return input;
// }

//CHECK SPEED

// function checkSpeed(speed) {

//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed <= speedLimit)
//     console.log('OK');
//   else {
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//       console.log('Liscense Suspended ...!');
//     else
//       console.log('Points', points);
//   }
// }

// checkSpeed(180);

//Show Even ODD

// function showEvenOdd(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0)
//       console.log(`${i} is Even`);
//     else
//       console.log(`${i} is Odd`);
//   }
// }
// showEvenOdd(10);

//Truthy and Falsy

// const array = [null, undefined, 1, 2, 3, 4, ''];
// console.log(countTruthy(array));

// function countTruthy(array) {
//   let count = 0;
//   for (let value of array)
//     if (value)
//       count++;
//   return count;
// }

//Function Show Properties

// const movie = {
//   title: 'The Hobbit',
//   director: 'Peter Jackson',
//   releaseDate: 2018,
//   rating: 5,
// }

// function showProperties(obj) {
//   for (let prop in movie) {
//     if (typeof movie[prop] === 'string') {
//       console.log(`${prop} : ${movie[prop]}`);
//     }
//   }
// }
// showProperties(movie);

//Return Sum UpTo a Limit

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(sum(10));

//Average Of Numbers

// const marks = [100, 100, 100];
// function averageMarks(marks) {

//   let sum = 0;
//   for (let mark of marks)
//     sum +=  mark;
//   let average = sum / marks.length;

//   if (average < 60) return 'F';
//   if (average < 70) return 'D';
//   if (average < 80) return 'C';
//   if (average < 90) return 'B';
//   return 'A';
// }

// console.log(averageMarks(marks));


//Show Stars

// function stars(rows) {

//   for (let i = 1; i <= rows; i++) {
//     let pattern = '';
//     for(let factor = 0; factor<i; factor++)
//     pattern += '*';
//     console.log(pattern);
//   }
// }

// stars(5);


//Prime Number

// function showPrime(limit) {

//   for (let number = 2; number <= limit; number++) {

//     let isPrime = true;

//     for (let factor = 2; factor < number; factor++) {
//       if (number % factor === 0) {
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime)
//       console.log(number);
//   }
// }

// showPrime(20);