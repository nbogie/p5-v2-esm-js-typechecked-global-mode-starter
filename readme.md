# Sketch-as-ESM: An annotated type-Checked JavaScript p5.js version 2 global-mode project starter

This is a work-in-progress commented starter project, set up for:

-   p5 v2.x
-   sketch as an ES module
-   type-checked _javascript_
-   intellisense (docs + autocompletion) for p5.js
-   global-mode

It's currently somewhere between a starter project and an annotated explainer.

It is intentionally a build-less setup intended for those who _do not have node.js installed_, so the p5 type files are included.

## Getting started

1. Open `index.html` via a web-server, _not_ directly from the file system.

ES modules cannot be opened directly by the browser from your file system. You need to load index.html from a web server. 
#### Example servers:

If you use vscode, one popular, easy-to-use server is the [LiveServer vscode extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

Or if you have node installed:

```bash
npx http-server -c-1
```

Or if you have python installed:

```bash⁨⁨
python -m http.server
```

2. Check the demo app works

3. press 'n' in the sketch to read the notes, if you're new to ES modules

4. start deleting what you don't need!

## Turning type-checking off

If you have problems with type-checking and you want to turn it off completely, you can do so by setting checkJs to false in jsconfig.json. Keep the jsconfig.json file to keep intelli-sense.

Alternatively, you can just suppress a single type error by commenting //@ts-ignore on the line above the problem.

## Other p5 project starters

Are you looking or project starter for p5 v1 ? v2? TS? JS with type-checking? Global mode ? Instance Mode?

Check out https://github.com/nbogie/p5-beyond-the-web-editor-neill/blob/main/docs/starter-projects.md
