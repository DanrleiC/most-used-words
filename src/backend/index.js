const { ipcMain } = require('electron');
const pathToRow = require('./pathToRow')
const prepareData = require('./prepareData')
const groupWords = require('./groupWords')

ipcMain.on('process-subtitle', (event, paths) => {
    pathToRow(paths)
        .then(rows => prepareData(rows))
        .then(words => groupWords(words))
        .then(groupedWords => event.reply('process-subtitle', groupedWords))
})