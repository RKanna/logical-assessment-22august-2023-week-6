"use strict";

//1.Write a JavaScript function to generate a random integer.

function randomInteger(numOne, numTwo) {
  return arguments.length === 0
    ? Math.floor(Math.random() * 2)
    : arguments.length === 1
    ? Math.floor(Math.random() * (numOne + 1))
    : Math.floor(Math.random() * (numOne - numTwo + 1)) + numTwo;
}

console.log(randomInteger(20, 1));
console.log(randomInteger(1, 10));
console.log(randomInteger(6));
console.log(randomInteger());

//2.Write a JavaScript program to display the current day and time in the following format.
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

const timeFormat = (num) => (num < 10 ? "0" : "") + num;

function displayDateTime() {
  const allDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const now = new Date();
  const displayDay = allDays[now.getDay()];
  const session = now.getHours() >= 12 ? "PM" : "AM";
  const formattedHours = now.getHours() % 12 || 12;

  const formattedTime = `${timeFormat(
    formattedHours
  )} ${session} : ${timeFormat(now.getMinutes())} : ${timeFormat(
    now.getSeconds()
  )}`;

  console.log(`Today is: ${displayDay}.`);
  console.log(`Current time is: ${formattedTime}`);
}

displayDateTime();

//3.Write a JavaScript program to get the current date. Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function formatDate(date, specialChar) {
  return date.toLocaleDateString("en-IN").replace(/\//g, specialChar);
}
const currentDate = new Date();
console.log(`${formatDate(currentDate, "-")}`);
console.log(`${formatDate(currentDate, "/")}`);

//4.Write a JavaScript program to check whether a given matrix is an identity matrix.

function checkMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  if (rows !== cols) {
    return false;
  }

  let isIdentity = true;
  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      if (i === j && value !== 1) {
        isIdentity = false;
      } else if (i !== j && value !== 0) {
        isIdentity = false;
      }
    });
  });
  return isIdentity;
}
const matrix1 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
console.log(checkMatrix(matrix1));
const matrix2 = [
  [1, 0, 0],
  [0, 1, 0],
  [1, 0, 1],
];
console.log(checkMatrix(matrix2));

//5. Write a JavaScript function to get all possible subsets with a fixed length

function getSubsets(arr, length) {
  const subsets = [];

  arr.forEach((value, index) => {
    const rest = arr.slice(index + 1);
    if (length === 1) {
      subsets.push([value]);
    } else {
      const restSubsets = getSubsets(rest, length - 1);
      restSubsets.forEach((subset) => {
        subsets.push([value, ...subset]);
      });
    }
  });

  return subsets.reverse();
}

const sampleArray = [1, 2, 3];
const subsetLength = 2;
const result = getSubsets(sampleArray, subsetLength);
console.log(result);

//6.Write a JavaScript function to check whether a string is blank or not.

function checkString(str) {
  return /^\s*$/.test(str); //used Regular Expression
}

console.log(checkString(""));
console.log(checkString("abc"));

//7.Write a JavaScript function to round a number to decimal place.

function roundTheNumber(number, decimalPlaces) {
  const convert = 10 ** decimalPlaces;
  const roundedValue = Math.round(number * convert) / convert;
  return roundedValue.toFixed(decimalPlaces);
}

console.log(roundTheNumber(12.375, 2));
console.log(roundTheNumber(-10.3079499, 3));
console.log(roundTheNumber(10.49999, 0));
console.log(roundTheNumber(10.49999, 2));

//8.Write a JavaScript program to display a random image (clicking on a button) from the following list.

const images = document.getElementsByTagName("img");

Array.from(images).forEach((image) => {
  image.style.display = "none";
});
const imageUrls = [
  "http://farm4.staticflickr.com/3691/11268502654_f28f05966c_m.jpg",
  "http://farm1.staticflickr.com/33/45336904_1aef569b30_n.jpg",
  "http://farm6.staticflickr.com/5211/5384592886_80a512e2c9.jpg",
];

function generateRandomImages() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const randomImage = imageUrls[randomIndex];

  const imgContainer = document.querySelector(".img img");
  imgContainer.src = randomImage;
  imgContainer.style.display = "block";
}

//9.Write a JavaScript function that hides email addresses to prevent unauthorized access.

function hideEmail(email) {
  const secureEmail = email.replace(/^(.{1,5}).*?(@.*$)/, "$1...$2"); //regular Expression
  return secureEmail;
}
console.log(hideEmail("robin_singh@example.com"));

//10.Write a JavaScript function to concatenate a given string n times (default is 1).

function againAndAgain(str, n = 1) {
  return str.repeat(n);
}
console.log(againAndAgain("Ha!"));
console.log(againAndAgain("Ha!", 2));
console.log(againAndAgain("Ha!", 3));
