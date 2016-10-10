# Meteor and NW.js

A real time software platform for your systems and devices.

## What you can do with this

## Setup tools

Install Meteor
```
curl https://install.meteor.com/ | sh
```

Download NW.js from https://nwjs.io/downloads

Create project folder
```
mkdir meteor-nwjs
cd meteor-nwjs
touch README.md
```

## Create and run the Meteor app

Create the **meteorapp** project. Remove HTML and CSS files and empty main JS.
```
meteor create meteorapp
cd meteorapp
rm client/main.css
rm client/main.html
> client/main.js
```

Test if we have nw and open devtools if we have it:

meteorapp/client/main.js:
```
Meteor.startup( () => {
  if (typeof nw !== 'object') {
    console.log('nw not found');
    return;
  }
  // open dev tools
  const win = nw.Window.get();
  win.showDevTools();
});
```

Run Meteor
```
meteor
```

## Setup NW.js

In other terminal, back to the project folder.

Create the package.json manifest:
```
touch package.json
```
package.json:
```
{
  "main": "http://localhost:3000",
  "node-remote": "http://localhost:3000",
  "name": "meteor-nwjs"
}
```

## Run NW.js

Run NW.js in the current directory
```
/<path-to-nw> --enable-logging=stderr .
```
