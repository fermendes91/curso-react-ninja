'use strict'

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, '../..', 'package.json')
const charset = 'utf8'

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
    fs.readFile(filePath, charset, (err, result) => {
        if(err) return reject(err)
        resolve(result)
    })
})

const read = async () => {
    try {
        const result = await readFile(filePath, charset)
        console.log('PRINT RESULT:\n ', result)
    } catch (error) {
        console.log('Error: ', error)
    }
   
}

read()
console.log('executou aqui')