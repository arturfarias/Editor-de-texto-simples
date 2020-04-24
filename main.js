const {app, BrowserWindow,Menu,MenuItem} = require('electron');
const menu = require("./menu");
const contex_menu = require("./contextMenu");

app.on('ready',function(){
    let mainWindows = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Editor de Texto",
        show: false,
        webPreferences: {
            preload: `${__dirname}/preload/model.js`,
            preload: `${__dirname}/preload/dialog.js`
        }
    });

    mainWindows.loadFile("pages/index.html");
    mainWindows.webContents.openDevTools();

    mainWindows.on("closed", ()=>{
        mainWindows = null;
    });

    mainWindows.once('ready-to-show', () => {
        mainWindows.maximize()
        mainWindows.show()
      })

    mainWindows.webContents.on('context-menu',function(e,params){
        contex_menu.popup(mainWindows,params.x,params.y)
    })
});
