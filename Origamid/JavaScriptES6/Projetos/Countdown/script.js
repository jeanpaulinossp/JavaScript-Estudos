import Countdown from "./countdown.js";

const timeNatal = new Countdown("24 December 2022 23:59:59 GMT-0300");
const timeNewYear = new Countdown("31 December 2022 23:59:59 GMT-0300");

console.log(timeNatal.total);
console.log(timeNewYear.total);
