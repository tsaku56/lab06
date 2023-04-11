const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const tableElement = document.getElementById("sales-table");

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

const allShops = [seattle, tokyo, dubai, paris, lima];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tableRow = document.createElement("tr");
let th = document.createElement("th");
th.textContent = "Location";
tableRow.appendChild(th);

for (let i = 0; i < hours.length; i++) {
  th = document.createElement("th");
  th.textContent = hours[i];
  tableRow.appendChild(th);
}

th = document.createElement("th");
th.textContent = "Totals";
tableRow.appendChild(th);

tableElement.appendChild(tableRow);

for (let i = 0; i < allShops.length; i++) {
  allShops[i].render();
}

const totalTR = document.createElement("tr");
function renderTotals() {
  let totalTHHeading = document.createElement("th");
  totalTHHeading.textContent = `Hourly Totals:`;
  totalTR.appendChild(totalTHHeading);
  let total = 0;
  for (let k = 0; k < hours.length; k++) {
    let hourlyTotal = 0;
    for (let i = 0; i < allShops.length; i++) {
      hourlyTotal += allShops[i].cookiesEachHour[k];
    }
    let totalTH = document.createElement("th");
    totalTH.textContent = hourlyTotal;
    totalTR.appendChild(totalTH);
    total += hourlyTotal;
  }
  let finalTotalTH = document.createElement("th");
  finalTotalTH.textContent = total;
  totalTR.appendChild(finalTotalTH);

  tableElement.appendChild(totalTR);
}

renderTotals();

const cookieForm = document.getElementById("cookie-form");

cookieForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.newStoreName.value;
  const minCust = event.target.minCust.value;
  const maxCust = event.target.maxCust.value;
  const avgCookies = event.target.avgCookies.value;

  const newStore = new CookieStand(name, minCust, maxCust, avgCookies);

  totalTR.innerHTML = "";
  newStore.render();
  document.getElementById("new-store-name").value = "";
  document.getElementById("min-cust").value = "";
  document.getElementById("max-cust").value = "";
  document.getElementById("avg-cookies").value = "";
  renderTotals();
});
