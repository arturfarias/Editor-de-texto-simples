const {Menu} = require('electron');

const template = Menu.buildFromTemplate([
	{ label: 'copiar', role: 'copy' },
    { label: 'colar', role: 'paste' },
    { label: 'recortar', role: 'cut' },
    { label: 'deletar', role: 'delete' },
    { label: 'selecionar', role: 'selectAll' },
    { label: 'desfazer',role: 'undo' },
    { label: 'refazer', role: 'redo' },
  ]);

  module.exports = template;
