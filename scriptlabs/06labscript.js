"use strict";

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const seattle = {
  locationName: "Seattle",
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiesPerSale: 6.3,
  customersEachHour: [],
  cookiesEachHour: [],
  totalDailyCookies: 0,
  calcCustomersEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      this.customersEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
    }
  },
  calcCookiesEachHour: function () {
    for (let i = 0; i < hours.length; i++) {
      const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiesPerSale);
      this.cookiesEachHour.push(oneHour);
      this.totalDailyCookies += oneHour;
    }
  },
  render() {
    this.calcCustomersEachHour();
    this.calcCookiesEachHour();
    const unorderedList = document.getElementById("seattle");
    for (let i = 0; i < hours.length; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
      unorderedList.appendChild(listItem);
    }
  },
};

seattle.render();

// const tokyo = {
//   location: "Tokyo",
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiesPerSale: 1.2,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCookies: 0,
//   calCustomersEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customerEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//     }
//   },
//   calcCookiesEachHour: function () {
//     this.calcCookiesEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       const oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += this.oneHour;
//     }
//   },
//   render() {
//     this.calcCustomersEachHour();
//     this.calcCookiesEachHour();
//     const unorderedList = document.getElementById("Tokyo");
//     for (let i = 0; i < hours.length; i++) {
//       const listItem = document.createElement("li");
//       listItem.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
//       unorderedList.appendChild(listItem);
//     }
//   },
// };

// const dubai = {
//   location: "Dubai",
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiesPerSale: 3.7,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCookies: 0,
//   calCustomersEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customerEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//     }
//   },
//   calcCookiesEachHour: function () {
//     this.calcCookiesEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       const oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += this.oneHour;
//     }
//   },
//   render() {
//     this.calcCustomersEachHour();
//     this.calcCookiesEachHour();
//     const unorderedList = document.getElementById("dubai");
//     for (let i = 0; i < hours.length; i++) {
//       const listItem = document.createElement("li");
//       listItem.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
//       unorderedList.appendChild(listItem);
//     }
//   },
// };

// const paris = {
//   location: "Paris",
//   minCustPerHour: 20,
//   maxCustPerHour: 38,
//   avgCookiesPerSale: 2.3,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCookies: 0,
//   calCustomersEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customerEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//     }
//   },
//   calcCookiesEachHour: function () {
//     this.calcCookiesEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       const oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += this.oneHour;
//     }
//   },
//   render() {
//     this.calcCustomersEachHour();
//     this.calcCookiesEachHour();
//     const unorderedList = document.getElementById("paris");
//     for (let i = 0; i < hours.length; i++) {
//       const listItem = document.createElement("li");
//       listItem.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
//       unorderedList.appendChild(listItem);
//     }
//   },
// };

// const lima = {
//   location: "Lima",
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiesPerSale: 4.6,
//   customerEachHour: [],
//   cookiesEachHour: [],
//   totalDailyCookies: 0,
//   calCustomersEachHour: function () {
//     for (let i = 0; i < hours.length; i++) {
//       this.customerEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
//     }
//   },
//   calcCookiesEachHour: function () {
//     this.calcCookiesEachHour();
//     for (let i = 0; i < hours.length; i++) {
//       const oneHour = Math.ceil(this.customerEachHour[i] * this.avgCookiesPerSale);
//       this.cookiesEachHour.push(oneHour);
//       this.totalDailyCookies += this.oneHour;
//     }
//   },
//   render() {
//     this.calcCustomersEachHour();
//     this.calcCookiesEachHour();
//     const unorderedList = document.getElementById("lima");
//     for (let i = 0; i < hours.length; i++) {
//       const listItem = document.createElement("li");
//       listItem.textContent = hours[i] + ": " + this.cookiesEachHour[i] + " cookies";
//       unorderedList.appendChild(listItem);
//     }
//   },
// };
