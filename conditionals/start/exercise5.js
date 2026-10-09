// Exercise 5: if / else picks what happens
// The question goes in round brackets ( ). Each block of work goes in curly brackets { }.
// JavaScript runs one block: never both, never neither.

function exercise5(start) {
  let isMuted = false; // try true
  const note = "C4";
  const duration = "4n";

  if (isMuted) {
    console.log("Exercise 5: muted, so nothing plays");
  } else {
    synth.triggerAttackRelease(note, duration, start);
  }
  // TODO 5a: put the line below inside an if / else, so the boolean decides:
  //            if (isMuted) {
  //              console.log("Exercise 5: muted, so nothing plays");
  //            } else {
  //              ...the line that plays...
  //            }

  // TODO 5b: flip isMuted to true and press. Then back to false. Which block ran each time?
  // TODO 5c: bug hunt. Put quotation marks around it: let isMuted = "false";
  //          Predict, then press. Do you hear the note? Take the quotation marks away again.
}
// comment: Silence. "false" is text, and in an if any text with something in it counts as yes. That's why booleans have no quotation mark
// ---------- You don't need to change anything below this line ----------

playOnClick("play-5", exercise5);
