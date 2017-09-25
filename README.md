To run simply run `gulp` from the root directory

I can't test on IE right now without a whole bunch of hassle so I just tried to bundle anything I could into gulp and use the most primitive JS I could for the rest. I decided raw functionality was the goal, the CSS here could be tidied up a lot.
This is the first time I used something other than webpack and a standard JS SPA in ages so I'm sure I done some silly mistakes and something may be broken that I haven't noticed; feedback is always appreciated.

Included:
- SASS support (compiles and concatenates files)
- JSHint linting (only applies to the compiled javascript file right now)
- Hot reloading on changes to scss, js and html files
- Testing operations (currently redundant, but I'd really want to go over everything there again)

Cheats:
- I've no clue how IE11 deals with json files so I just converted the stats json to a JS object through the magic of "find and replace all"
- Instead of dynamically building the background image classes, I don'e them manually
- I skipped the crest, but if I were to do it quickly I'd just clip out the relevant crests, I styled in the div and I've the ID logged so it'd be similar to the player photo
- Somewhat hacky player selection bar with the encapsulated onclick operations

Things I didn't get around to:
- creating dynamic css classes for background images
- particularly well thought out SASS (e.g. using variables)
- actual tests
- using a transpiler (this just popped into my head, really wish I thought of it earlier)
- handling the club crest file (I assume you wanted it to do that thing where you display a particular portion of the image rather than just breaking it apart)
- responsive design (e.g. I'd really prefer the top half remains fixed and the rest can scoll over it, this wouldn't take too long). At the moment basically imagine it's a design exclusively for phones in landscape (min width of 320px chosen due to that being iPhone 5's specs)
