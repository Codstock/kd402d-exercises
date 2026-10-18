// Processing data · Block 3: swiping across the keys (finished version)
// Exercises 7 to 10, done. Click the page (not the console), then drag a finger along q to p.

// The instrument: can play several notes at once.
const synth = new Tone.PolySynth(Tone.Synth).toDestination();

// A key has no position until we give it one: its index in this list.
const row = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];

// The positions of the keys in one swipe, in the order they arrived.
let swipe = [];

// 7a: "q" is at 0 and "p" at 9. "a" isn't in the row, so indexOf gives back -1.
// 8b: q towards p, the numbers go up. p towards q, they go down.
// 9c: with one key, first and last are the same position, so it's neither direction.
//     The check for swipe.length > 1 skips it.
// 10b: fast swipes often double a key or skip one, like [0, 1, 1, 3, 4, 6].
//      First and last still say 0 then 6, so the direction is right. We don't need every key.
// 10c: lift your finger between keys and every key is a swipe of one, so nothing plays.
//      Our swipe ends at the first keyup. That's a choice too, and slow swipes break it.

// ---------- Controls ----------
function keyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  if (event.repeat === false) {
    let position = row.indexOf(event.key);
    console.log(event.key + " is at " + position); // 7b
    if (position !== -1) {
      swipe.push(position); // 8a: only keys in the row
      console.log(swipe);
    }
  }
}

function keyUp(event) {
  if (swipe.length > 1) {
    // 9c: a swipe needs at least two keys
    let first = swipe[0];
    let last = swipe[swipe.length - 1];
    let now = Tone.now();
    if (last > first) {
      console.log("left to right"); // 9a
      synth.triggerAttackRelease("C4", "16n", now); // 10a: rising
      synth.triggerAttackRelease("E4", "16n", now + 0.12);
      synth.triggerAttackRelease("G4", "16n", now + 0.24);
    } else if (last < first) {
      console.log("right to left");
      synth.triggerAttackRelease("G4", "16n", now); // 10a: falling
      synth.triggerAttackRelease("E4", "16n", now + 0.12);
      synth.triggerAttackRelease("C4", "16n", now + 0.24);
    }
  }
  swipe = []; // 9b: the next swipe starts fresh
}

// ---------- Setup ----------
window.addEventListener("keydown", keyDown);
window.addEventListener("keyup", keyUp);
