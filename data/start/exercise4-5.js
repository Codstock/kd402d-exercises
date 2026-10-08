// Exercises 4 and 5: variables as arguments, and data you can see
// beat comes from exercise3.js. Every file on the page can use the variables the others make.

function playNote(name, length, time) {
  // TODO 5: log what is playing, before the note plays:
  //         console.log("Playing " + name + " for " + length);
  console.log("Playing " + name + " for " + length); //
  synth.triggerAttackRelease(name, length, time);
}

// TODO 4a: store the three notes and one length in variables, here, above the function.
// TODO 4b: use those variables in the calls below instead of the values typed in.
// TODO 4c: change the length variable once. Do all three notes change?
const rootNote = "C4";
const thirdNote = "E4";
const fifthNote = "G4";
let noteLength = "4n";

function exercise4(start) {
  playNote(rootNote, noteLength, start); // changed the parameter from C4 to the constant "rootNote" 8n to "notelength" which equals 4n from the call above
  playNote(thirdNote, noteLength, start + beat); //same as previous
  playNote(fifthNote, noteLength, start + beat * 2); //same as previous
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
