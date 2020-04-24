const {Menu} = require('electron');

// TODO colocar comandos do menu
const template = Menu.buildFromTemplate([
    { id: '1', label: 'one' },
    { id: '2', label: 'two' },
    { id: '3', label: 'three' },
    { id: '4', label: 'four' }
  ]);

  module.exports = template;
