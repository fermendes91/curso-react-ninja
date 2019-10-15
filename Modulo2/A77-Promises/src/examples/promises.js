'use strict'



const promise = new Promise((resolve, reject)=> {
    resolve('resolvido\n\n')
    // reject('rejeitado')
}) 

promise
    .then((result) => console.log(result))
    .catch((error) => console.log('Error: ', error))

/**
 * OUTRO EXEMPLO, com um caso mais real
 */

const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname, '../..', 'package.json'), 'utf-8', (err, result) => {
    if(err) return console.error('Error: ', err)
    console.log('SUCESSO\n\n')
}) 

// criando interface para utilizar promise com readFile

const filePath = path.join(__dirname, '../..', 'package.json')
const charset = 'utf8'

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
    fs.readFile(filePath, charset, (err, result) => {
        if(err) return reject(err)
        resolve(result)
    })
})

// podemos utilizar then encadeado, o ultimo then da chamada pegará o valor de retorno do then executado
// anteriormente ao mesmo
readFile(filePath, charset)
    .then((result) => JSON.parse(result).dependencies)
    .then((dependencies) => console.log(dependencies))
    .catch((error) => console.log('Error: ', error))

    