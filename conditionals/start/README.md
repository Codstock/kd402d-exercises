# Conditionals

This morning we built a song live in the lecture. Now you build it yourself, one step at a time, in `song.js`. Each step changes one thing, so you always hear what your last change did.

The song uses one new thing from Tone.js: `Tone.Loop`. Think of it as "Tone calls this function for us, once every beat". That's all you need to know about it today.

## Run it

1. Sync your fork and pull (see the main README), so this `conditionals/` folder is on your laptop.
2. Open `conditionals/start/index.html`, then run **Live Preview: Show Preview (External Browser)** from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).
3. Open the browser's developer tools (`F12`, or `Cmd+Option+I` on a Mac) and click the **Console** tab.
4. Click **Play**. You should hear a low note on every beat. Click **Stop** to end it.

The instruments are made in `setup.js`; you don't need to change it. When you save, the page reloads on its own.

## The steps

Do them in order. After each one: save, press Play, listen, check the console, and commit.

| Step | What you do                                         | A commit message could be          |
| ---- | --------------------------------------------------- | ---------------------------------- |
| 1    | Write `playChord` and `playMelody`                  | `Add chord and melody functions`   |
| 3    | Count the beats from 1 to 4, then start again       | `Count the beats`                  |
| 4    | Play the bass on beat 1 and the chord on beats 1, 3 | `Decide what plays on which beat`  |
| 5    | Count the bars, and bring the melody in at bar 3    | `Bring the melody in after bar 2`  |
| 6    | Change the melody in each section, and end the song | `Give each section its own melody` |

Step 2 is already done for you: it's the `Tone.Loop` line.

## The demos

`demos.js` has the four short demos from the lecture: `if` / `else`, a comparison, `else if`, and `&&`, `||`, `!`. Each has its own button. Change the values at the top of a demo (`isHappy`, `energy`, `note` …), save, and press its button again. Before you press it, say out loud what you think you'll hear.

## Your own changes

When the song works, make it yours. Some ideas:

- Add a fourth section with its own melody note: one more `else if`.
- Play the bass on beat 3 too, but only after bar 4. Which operator joins those two conditions?
- Make a variable `let isMuted = false;` and play nothing at all while it is `true`.

## If something goes wrong

- **Play does nothing:** `song.js` stopped before it reached the bottom, where Play is connected. Look for a red error in the console, and the file name and line number next to it.
- **The console counts 1, 2, 3, 4, 5, 6 …:** the `if (beat > 4)` is missing, or it's above the line that adds one.
- **`ReferenceError: beat is not defined`:** the `let beat = 1;` line is missing, or it's spelled differently. Capitals count.
- **`SyntaxError: Unexpected token '}'`** or **`'else'`:** a curly bracket is missing or one too many. Every `{` needs its `}`. Format the file (it happens on save) and look at the indentation: it shows where each block ends.
- **The melody never comes in:** log `bar` and check that it goes up. Is `bar = bar + 1;` inside the `if (beat > 4)` block?
- **You wrote `=` instead of `===`:** `if (beat = 1)` doesn't compare, it puts 1 in `beat`. Every beat becomes beat 1. Use `===` to ask a question.
- **No sound:** check the volume and your headphones. Sound only starts after you click a button.
