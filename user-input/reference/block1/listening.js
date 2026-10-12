// User input · Block 1: listening for keys (finished version)
// Exercises 1 to 4, done. Click the page (not the console) before you press keys.

// The instrument: plays one note at a time.
const synth = new Tone.Synth().toDestination();

// Exercises 1 to 4: one named function, handed to the page.
// The browser calls it every time a key goes down, and hands it the event.
function handleKeyDown(event) {
  Tone.start(); // sound can only start after a key press or a click
  console.log(event.key); // exercise 1: a, 7, " ", Shift, ArrowUp

  // Exercises 2 and 3: the key decides which note plays. Any other key: nothing.
  if (event.key === "a") {
    synth.triggerAttackRelease("C4", "8n");
  } else if (event.key === "s") {
    synth.triggerAttackRelease("D4", "8n");
  } else if (event.key === "d") {
    synth.triggerAttackRelease("E4", "8n");
  }
}

// Exercise 4: handleKeyDown without brackets. The page keeps it and calls it later.
document.addEventListener("keydown", handleKeyDown);

// Exercise 4b: with brackets, handleKeyDown() runs once, straight away, while the page loads.
// Nobody pressed a key, so there is no event: event is undefined, and the console shows
//   TypeError: Cannot read properties of undefined (reading 'key')
// The page stops there, and addEventListener never gets a function, so no key ever plays.
