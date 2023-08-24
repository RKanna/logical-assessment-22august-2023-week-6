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
