// Processing data · Block 3: swiping across the keys
// Exercises 7 to 10. Click the page (not the console), then drag a finger along q to p. Predict first, every time.
// After each exercise: save, click the page, press keys, and commit.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// A key has no position until we give it one: its index in this list.
const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

// The positions of the keys in one swipe, in the order they arrived.
let swipe = [];

// ---------- Exercise 7: give each key a position ----------
// row.indexOf("e") gives back 2: where "e" is in the list.
// 7a Predict, in a comment: what does row.indexOf give back for "q"? For "p"?
//    For "a", which isn't in the row?
// TODO 7b: in keyDown, log the position of every key you press:
//            console.log(event.key + " is at " + row.indexOf(event.key));

// ---------- Exercise 8: capture a swipe ----------
// TODO 8a: in keyDown, push each key's position into swipe, but only if the key is in the row.
//          Log swipe after each push.
// 8b Predict: drag a finger from q towards p. Do the numbers go up or down? Check.

// ---------- Exercise 9: which way? ----------
// keyUp runs when a key is let go. In a quick swipe, your finger is on at least one key
// the whole time, so the first keyup comes at the end.
// TODO 9a: in keyUp, compare the first and the last position in swipe. Bigger at the end means
//          left to right; smaller means right to left. Log which.
// TODO 9b: then empty the list, so the next swipe starts fresh:  swipe = [];
// 9c What happens with a "swipe" of one key? Make sure nothing is logged for it.

// ---------- Exercise 10: hear the direction ----------
// TODO 10a: play a rising phrase for left to right and a falling one for right to left:
//             let now = Tone.now();
//             synth.triggerAttackRelease("C4", "16n", now);
//             synth.triggerAttackRelease("E4", "16n", now + 0.12);
//             synth.triggerAttackRelease("G4", "16n", now + 0.24);
// 10b Swipe quickly and carelessly, and look at the logged list. Are any keys doubled or missing?
//     In a comment: why does comparing only the first and last position still work?
// 10c Swipe slowly, one key at a time. What happens, and why? (When does keyUp run?)

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    // TODO 7b and 8a go here
  }
}

function keyUp(event) {
  // TODO 9a, 9b and 10a go here
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
