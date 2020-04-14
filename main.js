const {app, BrowserWindow,Menu} = require('electron');

app.on('ready',function(){
    let mainWindows = new BrowserWindow({
        width: 800,
        height: 600,
        title: "Editor de Texto",
        show: false,
        webPreferences: {
            preload: `${__dirname}/preload/model.js`
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
});

Menu.setApplicationMenu(null);