//This commented project demonstrates a p5.js global-mode sketch that's loaded in an ES module.

//For more on ES modules, generally, see here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

//The sketch file you are reading has been loaded as an ES module (because type="module" is specified in the script tag in index.html)
//This means it can use import and export mechanisms
//to load selected functions and other values, either from other local modules
import { randomColour } from "./myUtils.js";
import { showNotesModal } from "./notes.js";
//or from modules on CDN (see notes.js for example)

//Our setup function WON'T be placed on the window object automatically, because we're in a module.
//p5.js won't find it, without us adding it to `window` manually (see later)
function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(30, 50);
    fill(100);
    circle(frameCount, height / 2, 100);

    fill(randomColour());
    circle(mouseX, mouseY, 30);
    circle(mouseY, mouseX, 10);
    drawHelpPrompt();
}

function keyPressed() {
    if (key === "?" || key === "n" || key === "h") {
        showNotesModal();
    }
}

function mousePressed(_evt) {
    console.log("mouse pressed!");
}

function drawHelpPrompt() {
    push();
    textAlign(RIGHT, BOTTOM);
    textSize(50);
    stroke(30);
    strokeWeight(2);
    fill(255);
    text('"n" for notes', width - 50, height - 50);
    pop();
}

//This is essential if we want p5.js to be able to discover and call these functions
//They're not otherwise visible to p5 because they're encapsulated in this module
window.setup = setup;
window.draw = draw;
window.mousePressed = mousePressed;
window.keyPressed = keyPressed;
