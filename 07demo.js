// constructor funtions
// the aim of constructor, to create a template for adding more data to asign to a cookie store.
"use strict";
// constructor functions, HAS to have capital as the first letter. Not camel case.
// functions are objects.
// when we are creating constructor func. Need to start with 'this.' function
// Using 'this.' refers to the new object we are creating.
// this is parameters in the parenthesis ()
// by changing the input data to the parameters, we can creat this as a function for any input.
// function CookieStand(name, minCust, maxCust, avgCookies) {
//   this.name = name;
//   this.minCust = minCust;
//   this.maxCust = maxCust;
//   this.avgCookies = avgCookies;
// }
// methods are properties, that contain functions.
// Using prototype in browser inspect will help to check out constructors.

// creating 'new' instance. Using the constructor
// const cookieStore1 = new CookieStand("Seattle", 20, 65, 6.3);
// const cookieStore2 = new CookieStand("Paris", 40, 100, 8.2);
// const cookieStore3 = new CookieStand("Dubai", 11, 38, 3.7);

// this is arugments
// console.log(cookieStore1);
// console.log(cookieStore1.name);
// console.log(cookieStore1.minCust);
// console.log(cookieStore1.maxCust);
// console.log(cookieStore1.avgCookies);

// console.log(cookieStore2);
// console.log(cookieStore2.name);
// console.log(cookieStore2.minCust);
// console.log(cookieStore2.maxCust);
// console.log(cookieStore2.avgCookies);

// console.log(cookieStore3);
// console.log(cookieStore3.name);
// console.log(cookieStore3.minCust);
// console.log(cookieStore3.maxCust);
// console.log(cookieStore3.avgCookies);

// Creating a Prototype for construction, will create a template to enter code without making it heavy by creating the same function each time for our code.
function CookieStand(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
}

CookieStand.prototype.getAvgCookieCount = function () {
  console.log(`This store name is ${this.name}`);
};

const cookieStore1 = new CookieStand("Seattle", 20, 65, 6.3);
const cookieStore2 = new CookieStand("Paris", 40, 100, 8.2);
const cookieStore3 = new CookieStand("Dubai", 11, 38, 3.7);

cookieStore1.getAvgCookieCount();
cookieStore2.getAvgCookieCount();
cookieStore3.getAvgCookieCount();
