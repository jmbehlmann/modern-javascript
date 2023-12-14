var moment = require('moment'); // require
moment().format();
import * as Tone from 'tone';

/* global moment */

console.log("noooooooooooooode");

var datetime = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(datetime);

var hoursAgo = moment().startOf("day").fromNow();

var startedString = "The day started ";
console.log(startedString + hoursAgo);

var dayOfWeek = moment().format('dddd');
var weekDayString = "The day of the week is: ";

console.log(weekDayString + dayOfWeek);
