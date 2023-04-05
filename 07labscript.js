const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const tableElement = document.getElementById("sales-table");

const state = {
  allCookieStands: [],
};

function CookieStand(locationName, minCustPerHour, maxCustPerHour, avgCookiePerSale) {
  this.locationName = locationName;
  this.minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerSale = avgCookiePerSale;
  this.customersEachHour = [];
  this.cookiesEachHour = [];
  this.totalDailySales = 0;
}

CookieStand.prototype.calcCustomersEachHour = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersEachHour.push(random(this.minCustPerHour, this.maxCustPerHour));
  }
};

CookieStand.prototype.calcCookiesEachhour = function () {
  for (let i = 0; i < hours.length; i++) {
    const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookiePerSale);
    this.cookiesEachHour.push(oneHour);
    this.totalDailySales += oneHour;
  }
};

CookieStand.prototype.render = function () {
  this.calcCustomersEachHour();
  this.calcCookiesEachhour();
  const tableRow = document.createElement("tr");
  let tableDataElement = document.createElement("td");
  tableDataElement.textContent = this.locationName;
  tableRow.appendChild(tableDataElement);
  for (let i = 0; i < hours.length; i++) {
    tableDataElement = document.createElement("td");
    tableDataElement.textContent = this.cookiesEachHour[i];
    tableRow.appendChild(tableDataElement);
  }
  const tableHeader = document.createElement("th");
  tableHeader.textContent = this.totalDailySales;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
};

let seattle = new CookieStand("Seattle", 23, 65, 6.3);
let tokyo = new CookieStand("Tokyo", 3, 24, 1.2);
let dubai = new CookieStand("Dubai", 11, 38, 3.7);
let paris = new CookieStand("Paris", 20, 38, 2.3);
let lima = new CookieStand("Lima", 2, 16, 4.6);

state.allCookieStands.push(seattle, tokyo, dubai, paris, lima);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function makeHeaderRow() {
  const tableRow = document.createElement("tr");
  let tableHeader = document.createElement("th");
  tableHeader.textContent = "Locations";
  tableRow.appendChild(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    tableHeader = document.createElement("th");
    tableHeader.textContent = hours[i];
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement("th");
  tableHeader.textContent = "Location Totals";
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

function makeFooterRow() {
  const tableRow = document.createElement("tr");
  let tableHeader = document.createElement("th");
  tableHeader.textContent = "Hourly Totals for All Locations";
  tableRow.appendChild(tableHeader);
  let totalOfTotals = 0;
  for (let i = 0; i < hours.length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < state.allCookieStands.length; j++) {
      hourlyTotal += state.allCookieStands[j].cookiesEachHour[i];
      totalOfTotals += state.allCookieStands[j].cookiesEachHour[i];
    }
    tableHeader = document.createElement("th");
    tableHeader.textContent = hourlyTotal;
    tableRow.appendChild(tableHeader);
  }
  tableHeader = document.createElement("th");
  tableHeader.textContent = totalOfTotals;
  tableRow.appendChild(tableHeader);
  tableElement.appendChild(tableRow);
}

function renderTable() {
  makeHeaderRow();
  for (let i = 0; i < state.allCookieStands.length; i++) {
    state.allCookieStands[i].render();
  }
  makeFooterRow();
}

renderTable();

// function makeFooterRow() {}

// cookieStore1.render();
// cookieStore2.render();
// cookieStore3.render();
// cookieStore4.render();
// cookieStore5.render();

// console.log(cookieStore1);

// const dailyCookies = {
//     customerEachHour: [],
//     cookiesEachHour: [],
//     totalDailyCookies: 0,

//     calcCustomerEachHour: function () {
//       for (let i = 0; i < hours.length; i++);
//       this.customersEachHour.push(random(this.minCust, this.maxCust));
//     },
//     calcCookiesEachHour: function () {
//       for (let i = 0; i < hours.length; i++) {
//         const oneHour = Math.ceil(this.customersEachHour[i] * this.avgCookies);
//         this.cookiesEachHour.push(oneHour);
//         this.totalDailyCookies += oneHour;
//       }
//     },
//   };

// CookieStand.prototype.render = function () {
//   const containerElem = document.getElementById("cookieProfile");
//   const articleElem = document.createElement("article");
//   containerElem.appendChild(articleElem);

//   const tableElem = document.createElement("table");
//   articleElem.appendChild(tableElem);

//   const headerRow = document.createElement("tr");
//   tableElem.appendChild(headerRow);

//   const storeHeader = document.createElement("th");
//   headerRow.appendChild(storeHeader);

//   const dataRow = document.createElement("tr");
//   tableElem.appendChild(dataRow);

//   const storeDataCell = document.createElement("td");
//   dataRow.appendChild(storeDataCell);
//   storeDataCell.textContent = this.location;

//   const dailyCookiesData = document.createElement("td");
//   dataRow.appendChild(dailyCookiesData);
//   dailyCookiesData.textContent = this.dailyCust;

//   const storeFooter = document.createElement("tf");
//   headerRow.appendChild(storeFooter);
// };
