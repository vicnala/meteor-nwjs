Meteor.startup( () => {
  if (typeof nw !== 'object') {
    console.log('nw not found!');
    return;
  }
  // open dev tools
  const win = nw.Window.get();
  win.showDevTools();
});
