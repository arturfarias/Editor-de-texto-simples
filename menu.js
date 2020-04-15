const {Menu} = require('electron');

const template = Menu.buildFromTemplate([
    { id: '1', label: 'one' },
    { id: '2', label: 'two' },
    { id: '3', label: 'three' },
    { id: '4', label: 'four' }
  ]);

Menu.setApplicationMenu(template);

module.exports = Menu;