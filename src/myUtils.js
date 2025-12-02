// This is loaded as an ES module, too.
// It is loaded directly by our sketch file, and not by index.html, as it happens.
// Because it is an ES module, it can use the "export" mechanism to decide WHICH of its functions and variables are accessible outwith this file.

export function randomColour() {
    return random(["#99b898", "#fecea8", "#ff847c", "#e84a5f", "#2a363b"]);
}

export function randomScreenPosition() {
    return {
        x: random(0.2, 0.8) * width,
        y: random(0.2, 0.8) * height,
    };
}
