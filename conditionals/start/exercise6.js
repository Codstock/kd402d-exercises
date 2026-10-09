// Exercise 6: else if adds a middle case
// JavaScript asks the questions from the top, and runs the first block whose answer is true.
// The rest are skipped.

function exercise6(start) {
  let bpm = 140; // try 60, 100 and 140

  if (bpm < 80) {
    synth.triggerAttackRelease("C3", "4n", start);
  } else if (bpm < 120) {
    synth.triggerAttackRelease("C4", "4n", start);
  } else {
    synth.triggerAttackRelease("C5", "4n", start);
  }

  // TODO 6a: pick a note from the tempo band:
  //            slower than 80:        play "C3", a low note
  //            slower than 120:       play "C4", in the middle
  //            anything else:         play "C5", a high note
  //          Use if (bpm < 80) { … } else if (bpm < 120) { … } else { … }
  //          Each block has one synth.triggerAttackRelease(…, "4n", start);
  // TODO 6b: predict, then press, with bpm at 60, 100 and 140. Then try the edges: 80 and 120.
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-6", exercise6);
