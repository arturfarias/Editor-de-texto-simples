const { dialog } = require('electron').remote;

class Dialog{
    constructor(){
    };

    async getImage(){
        var data = dialog.showOpenDialogSync({ properties: ['openFile'] , filters: [{ name: 'Images', extensions: ['jpg', 'png', 'gif'] }]})
        return data[0];
   };
};

window.Dialog = Dialog