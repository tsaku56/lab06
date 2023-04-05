function CookieStand(name, minCust, maxCust, avgCookies) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
}

CookieStand.prototype.getAvgCookieCount = function () {
  console.log(`This store name is ${this.name}`);
};
