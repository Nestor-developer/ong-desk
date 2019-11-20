const {app, BrowserWindow, Menu,ipcMain} = require('electron');
const url = require('url');
const path = require('path');
require('electron-reload')(__dirname)

if(process.env.NODE_ENV !== 'production'){
    require('electron-reload')(__dirname,{
        electron: path.join(__dirname, '../node_modules', '.bin', 'electron') //Mejora de actualizacion de código
    })
}
//conexion a base de datos
/*const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    port: '33065',
    user: 'root',
    password: '',
    database: 'faee'
})

connection.connect(function(errr){
    if(errr){
        console.log(errr.code)
        console.log(errr.fatal)
    }
})

//cerrar la base de datos
connection.end(function(){

})*/
//variables globales
let mainWindow
let registroWindow

app.on("ready", () =>{
    mainWindow = new BrowserWindow({width: 720, height: 600}); //creación de la ventana
    mainWindow.loadURL(url.format({ //Formato para abrir la ventana
        pathname: path.join(__dirname, 'views/index.html'), //donde se va a referenciar la ventana 
        protocol: 'file',
        slashes: true
    }))

    //mainWindow.webContents.openDevTools();

    //creacion de la parte superior de los objetos.
    const mainMenu = Menu.buildFromTemplate(templateMenu);
    Menu.setApplicationMenu(mainMenu);

    mainWindow.on('closed', () => {
        app.quit();
    });
});

function createRegistroWindow(){
    registroWindow = new BrowserWindow({
        width: 1300,
        height: 1200,
        title: 'Registros'
    });
    registroWindow.setMenu(null);
    registroWindow.loadURL(url.format({ //Formato para abrir la ventana
        pathname: path.join(__dirname, 'views/registros.html'), //donde se va a referenciar la ventana 
        protocol: 'file',
        slashes: true
    }));

    //registroWindow.webContents.openDevTools();
    registroWindow.on('closed', () => {
        registroWindow = null;
    });
}

// Ipc Renderer Events
ipcMain.on('product:new', (e, newProduct) => {
    // send to the Main Window
    console.log(newProduct);
    mainWindow.webContents.send('product:new', newProduct);
    newProductWindow.close();
  });

const templateMenu = [
    {
        label: 'Archivo',
        submenu: [
            {
                label: 'Registrar niños',
                accelerator: 'ctrl+N',
                click() {
                    createRegistroWindow();
                }
            },
            {
                label: 'Salir',
                accelerator: process.platform == 'darwin' ? 'command+Q' : 'ctrl+Q',
                click(){
                    app.quit();
                }
            }
        ]
    }
];

if(process.platform == 'darwin') {
    templateMenu.unshift({
        label: app.getName()
    });
}

if(process.env.NODE_ENV !== 'production'){
    templateMenu.push({
        label: 'Herramientas de desarrollador',
        submenu: [
            {
                label: 'Mostrar/Herramientas de desarrollo ocultas',
                click(item, focusedWindow){
                    focusedWindow.toggleDevTools();
                }
            },
            {
                role: 'reload'
            }
        ]
    });
}