// Exercise 4: two equals signs or three?
// Remember yesterday's bug hunt: the octave arrived as text, "4", and "4" + 1 gave "41".

function exercise4(start) {
  const typedOctave = "4"; // text, in quotation marks
  const octave = 4; // a number
  // I dont know why the logs seperated like this = It's a code formatter
  console.log(
    "Exercise 4: typedOctave == octave is " + (typedOctave == octave),
  );
  console.log(
    "Exercise 4: typedOctave === octave is " + (typedOctave === octave),
  );

  console.log(
    "Exercise 4: NumbertypedOctave == octave is " +
      (Number(typedOctave) == octave),
  );
  console.log(
    "Exercise 4: Number(typedOctave) === octave is " +
      (Number(typedOctave) === octave),
  );
  // TODO 4a: predict, then log both:
  //            console.log("Exercise 4: typedOctave == octave is " + (typedOctave == octave));
  //            console.log("Exercise 4: typedOctave === octave is " + (typedOctave === octave));
  // TODO 4b: one of them says "4" and 4 are the same. Which one? Is it telling you the truth?
  //          Write your answer in a comment here:
  // The first one says true the other false. in the first JS skips the quotation marks and makes assumptions.
  // the secpnd one says false because a string and number are different types.
  // TODO 4c: turn the text into a number first, then compare with three equals signs:
  //            Number(typedOctave) === octave
  //          Log it. When you know both sides are the same kind of value, === gives the honest answer.
  // Comment: Putting number turns the text ("4" which is a string) into a number which makes both
  // numbers and in result they are

  synth.triggerAttackRelease("C" + octave, "8n", start);
}

// ---------- You don't need to change anything below this line ----------

playOnClick("play-4", exercise4);
