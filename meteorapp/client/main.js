Meteor.startup( () => {
  if (typeof nw !== 'object') {
    console.log('nw not found!');
    return;
  }
  // open dev tools
  const win = nw.Window.get();
  win.showDevTools();

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
});
