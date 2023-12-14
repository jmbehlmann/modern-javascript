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

//attach a click listener to a play button
document.querySelector('button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})

//create a synth and connect it to the main output (your speakers)
const synth = new Tone.Synth().toDestination();

//play a middle 'C' for the duration of an 8th note
synth.triggerAttackRelease("C4", "8n");

// Interpolate variable bindings
var name = "Bob";
console.log(`Hello ${name}, how are you at ${datetime}?`);
