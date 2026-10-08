// Exercise 3: tempo arithmetic

const bpm = 120; // beats per minute
const beat = 60 / bpm; // how long one beat lasts, in seconds
console.log("Exercise 3: one beat lasts " + beat + " seconds");
let beatsPerMinute = beat * 1000; // Created a call called "beatsPerMinute" stringed it to beat * 1000.
console.log(beatsPerMinute); // Logged the beatsPerMinute "call"
console.log(Math.round(beatsPerMinute)); // Logged the same call but with "math.round to round to the nearest number.
// Results in no decimals. less clatter in the consule"

// TODO 3a: log the beat in milliseconds, rounded: Math.round(beat * 1000)

function exercise3(start) {
  synth.triggerAttackRelease("C4", "8n", start);
  synth.triggerAttackRelease("E4", "8n", start + beat); // the "beat" replaces a number playing the next chord a beat in between.
  synth.triggerAttackRelease("G4", "8n", start + beat * 2);

  // TODO 3b: play "E4" one beat after start, then "G4" two beats after start.
  //          Use beat, not a number: start + beat, start + beat * 2
}

// TODO 3c: change bpm (try 60, then 160) and play again. Which lines did you change?

// ---------- You don't need to change anything below this line ----------

playOnClick("play-3", exercise3);
