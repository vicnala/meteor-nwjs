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

## What can I do with this?

Whatever the user in the systems running NW.js connected to this server is able to do.

For example you can get the system info usin Node.js **exec**

meteorapp/client/main.js:

```
  //...
  // run a command in the client system
  let exec;
  try {
    exec = nw.require('child_process').exec;
  } catch (e) {
    console.log(e);
  }

  if (exec) {
    // executes `uname -a`
    const child = exec("uname -a", function (error, stdout, stderr) {
      if (error !== null) {
        console.log(error.toString().replace('\n', ' '));
        return;
      }
      console.log(stdout);
    });
  }
  //...
```

Think that if you are able to run sudo commands, you can configure your system (apt-get, ...) and your NW.js distribution (npm -i) to be enable to run your application with the only limitation of the supported hardware.

Also note that, with the Meteor goodies, you can simply update your app and every client will be updated to run whatever you want.
