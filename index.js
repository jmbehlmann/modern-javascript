/* global moment */

console.log("javescriiiiiiiiiiiipt");

var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(datetime);

var hoursAgo = moment().startOf("day").fromNow();

var startedString = "The day started ";
console.log(startedString + hoursAgo);

var dayOfWeek = moment().format('dddd');
var weekDayString = "The day of the week is: ";

console.log(weekDayString + dayOfWeek);
