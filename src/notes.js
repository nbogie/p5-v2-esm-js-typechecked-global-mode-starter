//Support functions for showing notes in a modal dialog

//This local module you're reading, loaded by our sketch, in turn...
//loads the "sweetalert2" module from CDN, which provides modal dialog functionality.
import Swal from "https://cdn.jsdelivr.net/npm/sweetalert2@11.26.3/dist/sweetalert2.esm.all.min.js";

//Documentation, examples: https://sweetalert2.github.io/

//This function builds and shows a modal html dialog displaying notes about this sketch
export function showNotesModal() {
    const lines = [
        "mySketch.js is interpreted as an <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules'>ES module</a>.",
        "...because it as marked as such in the html file (type=module)",
        "this allows the use of import, export.",
        "",
        "mySketch.js needs to set window.setup and window.draw - otherwise those functions are internal to the sketch module and not placed on the global window variable",
        "p5 notices window.setup and/or window.draw have been set, so it sets up global mode, polluting the global namespace (the window object) with all of its functions and variables.",
        "As a result, things like width, height, fill() circle() are available in our other modules - their lookups resolve on the window object",
        "",
        "(This modal is itself created by a function loaded from a module)",
    ];

    const listHTML =
        "<ul>" + lines.map((l) => `<li>${l}</li>`).join("\n") + "</ul>";
    Swal.fire({
        title: "Writing a p5 sketch as ES module",
        html: listHTML,
        backdrop: true,
        theme: "auto", //light/dark, per system
    });
}
