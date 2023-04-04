"use strict";

const hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm"];

const seattle = {
  minCust: 23,
  maxCust: 65,
  avgCooki: 6.3,
  avgCustHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + (this.minCust + 1);
  },
};

const myResult = document.getElementById("mySeattle");

const tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCooki: 1.2,
  avgCustHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + (this.minCus + 1);
  },
};

const dubai = {
  minCust: 11,
  maxCust: 38,
  avgCooki: 3.7,
  avgCustHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + (this.minCus + 1);
  },
};

const paris = {
  minCust: 20,
  maxCust: 38,
  avgCooki: 2.3,
  avgCustHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + (this.minCus + 1);
  },
};

const lima = {
  minCust: 2,
  maxCust: 16,
  avgCooki: 4.6,
  avgCustHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)) + (this.minCus + 1);
  },
};
